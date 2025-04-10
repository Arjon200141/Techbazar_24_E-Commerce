import React, { useEffect, useRef } from "react";

const BubbleAnimation = () => {
    const containerRef = useRef(null);
    const bubblesRef = useRef([]);
    const bubbleCount = 15;

    // Triangle styles with custom colors
    const triangleStyles = [
        { // Cyan
            borderLeft: "30px solid transparent",
            borderRight: "30px solid transparent",
            borderTop: "60px solid #6ed3ff"
        },
        { // Blue
            borderLeft: "30px solid transparent",
            borderRight: "30px solid transparent",
            borderTop: "60px solid #0022ba"
        },
        { // Orange
            borderLeft: "30px solid transparent",
            borderRight: "30px solid transparent",
            borderTop: "60px solid #b80c00"
        }
    ];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const animateBubbles = () => {
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            bubblesRef.current.forEach((bubble, index) => {
                if (!bubble) return;

                // Random properties for each bubble
                const startX = Math.random() * (containerWidth - 60);
                const startY = containerHeight + 50;
                const endY = -50;
                const duration = 3000 + Math.random() * 5000;
                const xDrift = (Math.random() - 0.5) * containerWidth * 0.4;
                
                // Random opacity values (0.4 to 0.9)
                const startOpacity = (Math.random() * 0.5 + 0.4).toFixed(2);
                const midOpacity = (Math.random() * 0.3 + 0.6).toFixed(2);
                const endOpacity = (Math.random() * 0.2).toFixed(2);

                // Apply initial styles
                bubble.style.left = `${startX}px`;
                bubble.style.top = `${startY}px`;
                bubble.style.opacity = startOpacity;

                // Create animation with random opacity changes
                bubble.animate(
                    [
                        { 
                            transform: `translateX(0px) translateY(0px)`,
                            opacity: startOpacity
                        },
                        { 
                            transform: `translateX(${xDrift * 0.5}px) translateY(${(endY - startY) * 0.3}px)`,
                            opacity: midOpacity
                        },
                        { 
                            transform: `translateX(${xDrift}px) translateY(${endY - startY}px)`,
                            opacity: endOpacity
                        }
                    ],
                    {
                        duration: duration,
                        easing: "linear",
                        iterations: Infinity
                    }
                );
            });
        };

        animateBubbles();
        const resizeObserver = new ResizeObserver(animateBubbles);
        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
            bubblesRef.current.forEach(bubble => {
                bubble?.getAnimations()?.forEach(anim => anim.cancel());
            });
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-[30vh] overflow-hidden">
            {[...Array(bubbleCount)].map((_, i) => (
                <div
                    key={`bubble-${i}`}
                    ref={el => (bubblesRef.current[i] = el)}
                    className="absolute will-change-transform"
                    style={{
                        ...triangleStyles[i % 3],
                        opacity: 0 // Initial opacity set by animation
                    }}
                />
            ))}
        </div>
    );
};

export default BubbleAnimation;