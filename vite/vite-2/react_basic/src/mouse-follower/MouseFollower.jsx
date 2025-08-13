import { useEffect, useState, useRef } from "react";
import styles from './styles.module.css';

function Mousefollower() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const targetPos = useRef({ x: 0, y: 0 });

    function mouseMove(e) {
        targetPos.current = { x: e.clientX, y: e.clientY };
    }

    useEffect(function () {
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    useEffect(() => {
        function animate() {
            setPos(prev => ({
                x: prev.x + (targetPos.current.x - prev.x) * 0.1,
                y: prev.y + (targetPos.current.y - prev.y) * 0.1
            }));
            requestAnimationFrame(animate);
        }
        animate();
    }, []);

    return (
        <>
            <div className={styles.mouseFollowerContainer}>
                <div
                    className={styles.mouseFollowerDot}
                    style={{
                        left: pos.x + "px",
                        top: pos.y + "px",
                    }}
                >
                </div>
            </div>
        </>
    )
}

export default Mousefollower;
