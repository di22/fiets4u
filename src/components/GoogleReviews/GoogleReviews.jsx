import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Module-level cache — ensures the API is only ever called once
// (React 18 StrictMode double-invokes effects in development)
let _cachedPromise = null;

// -----------------------------------------------------------------------
// Uses the Places API (New) Text Search REST endpoint
// This avoids all JS SDK / importLibrary bootstrap issues entirely.
// -----------------------------------------------------------------------
async function fetchReviewsFromPlacesAPI() {
    const searchRes = await fetch(
        `https://places.googleapis.com/v1/places:searchText`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': API_KEY,
                // Get everything in one request — avoids a second call which has CORS issues
                'X-Goog-FieldMask': 'places.id,places.displayName,places.rating,places.userRatingCount,places.googleMapsUri,places.reviews',
            },
            body: JSON.stringify({ textQuery: 'Fietsmaker 4 You Amsterdam' }),
        }
    );

    if (!searchRes.ok) throw new Error(`Text search failed: ${searchRes.status}`);
    const data = await searchRes.json();

    const place = data.places?.[0];
    if (!place) throw new Error('No place found');

    return {
        name: place.displayName?.text,
        rating: place.rating,
        total: place.userRatingCount,
        url: place.googleMapsUri,
        reviews: place.reviews ?? [],
    };
}


function getReviews() {
    if (!_cachedPromise) _cachedPromise = fetchReviewsFromPlacesAPI();
    return _cachedPromise;
}

// -----------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------
function StarRating({ rating }) {
    return (
        <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    style={{ color: star <= Math.round(rating) ? '#f5a623' : 'rgba(255,255,255,0.15)', fontSize: '1rem' }}
                >★</span>
            ))}
        </div>
    );
}

function ReviewCard({ review }) {
    const [expanded, setExpanded] = useState(false);
    const text = review.text?.text || review.originalText?.text || '';
    const isLong = text.length > 180;
    const displayText = isLong && !expanded ? text.slice(0, 180) + '…' : text;
    const authorName = review.authorAttribution?.displayName || 'Anonymous';
    const authorPhoto = review.authorAttribution?.photoUri;
    const authorUrl = review.authorAttribution?.uri;
    const relativeTime = review.relativePublishTimeDescription || '';

    return (
        <div
            style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                minWidth: '300px',
                maxWidth: '340px',
                flex: '0 0 auto',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,200,255,0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {/* Reviewer info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                {authorPhoto ? (
                    <img
                        src={authorPhoto}
                        alt={authorName}
                        referrerPolicy="no-referrer"
                        style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                    />
                ) : (
                    <div style={{
                        width: 44, height: 44, borderRadius: '50%', background: 'var(--color-primary)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 700, fontSize: '1.1rem', color: '#000', flexShrink: 0,
                    }}>
                        {authorName[0]?.toUpperCase() ?? '?'}
                    </div>
                )}
                <div>
                    {authorUrl ? (
                        <a href={authorUrl} target="_blank" rel="noopener noreferrer"
                            style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>
                            {authorName}
                        </a>
                    ) : (
                        <span style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem' }}>{authorName}</span>
                    )}
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '1px' }}>
                        {relativeTime}
                    </div>
                </div>
            </div>

            <StarRating rating={review.rating} />

            {text ? (
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0, flex: 1 }}>
                    {displayText}
                    {isLong && (
                        <button
                            onClick={() => setExpanded(v => !v)}
                            style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontSize: '0.85rem', padding: '0 0 0 4px' }}
                        >
                            {expanded ? ' show less' : ' read more'}
                        </button>
                    )}
                </p>
            ) : (
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', fontStyle: 'italic', margin: 0 }}>
                    (No written review)
                </p>
            )}
        </div>
    );
}

// -----------------------------------------------------------------------
// Main export
// -----------------------------------------------------------------------
export default function GoogleReviews() {
    const [reviews, setReviews] = useState([]);
    const [placeInfo, setPlaceInfo] = useState(null);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        let cancelled = false;
        getReviews()
            .then(data => {
                if (cancelled) return;
                setPlaceInfo({ name: data.name, rating: data.rating, total: data.total, url: data.url });
                setReviews(data.reviews);
                setStatus('ok');
            })
            .catch(err => {
                console.error('Google Reviews error:', err);
                if (!cancelled) setStatus('error');
            });
        return () => { cancelled = true; };
    }, []);

    return (
        <section style={{ padding: '8rem 0', background: 'var(--color-bg)' }}>
            <div className="container">
                {/* Section header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        What Our <span className="text-gradient">Customers Say</span>
                    </h2>

                    {status === 'ok' && placeInfo && (
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <span style={{ fontSize: '2rem', color: '#f5a623', lineHeight: 1 }}>★</span>
                            <span style={{ fontSize: '1.6rem', fontWeight: 700 }}>{placeInfo.rating?.toFixed(1)}</span>
                            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                                · {placeInfo.total?.toLocaleString()} reviews on Google
                            </span>
                            {placeInfo.url && (
                                <a
                                    href={placeInfo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        marginLeft: '0.5rem', fontSize: '0.85rem',
                                        color: 'var(--color-primary)', textDecoration: 'none',
                                        border: '1px solid var(--color-primary)',
                                        padding: '0.3rem 0.8rem', borderRadius: '999px',
                                    }}
                                >
                                    See all ↗
                                </a>
                            )}
                        </div>
                    )}
                </div>

                {/* States */}
                {status === 'loading' && (
                    <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: '4rem 0' }}>
                        Loading reviews…
                    </div>
                )}
                {status === 'error' && (
                    <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: '4rem 0' }}>
                        Could not load reviews at this time.
                    </div>
                )}
                {status === 'ok' && reviews.length === 0 && (
                    <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: '4rem 0' }}>
                        No reviews found.
                    </div>
                )}

                {/* Review cards */}
                {status === 'ok' && reviews.length > 0 && (
                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        overflowX: 'auto',
                        paddingBottom: '1.5rem',
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                    }}>
                        {reviews.map((review, i) => (
                            <div key={i} style={{ scrollSnapAlign: 'start' }}>
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </div>
                )}

                {/* Google attribution (required by Terms of Service) */}
                {status === 'ok' && (
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <img
                            src="https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-non-white3.png"
                            alt="Powered by Google"
                            style={{ height: '18px', opacity: 0.6 }}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
