function adjustOpacity(element, targetPosition, range) {
    const fadeInOutRange = range * 0.3;
    const fullVisibilityRange = range - 2 * fadeInOutRange;
    let scrollY = window.scrollY;

    if (scrollY < targetPosition - fadeInOutRange) {
        // no opacity
        element.style.opacity = "0";
    } else if (scrollY < targetPosition) {
        // partial opacity
        let diff = targetPosition - scrollY;
        let opacity = 1 - diff / fadeInOutRange;
        element.style.opacity = `${opacity}`;
    } else if (scrollY < targetPosition + fullVisibilityRange) {
        // full opacity
        element.style.opacity = "1";
    } else if (
        // partial opacity
        scrollY <
        targetPosition + fullVisibilityRange + fadeInOutRange
    ) {
        let diff = scrollY - (targetPosition + fullVisibilityRange);
        let opacity = 1 - diff / fadeInOutRange;
        element.style.opacity = `${opacity}`;
    } else {
        element.style.opacity = "0";
    }
}

function addBubbleScene(offsets) {
    window.addEventListener("scroll", () => {
        offsets.forEach((scrollDetail, index) => {
            const elementId = `bubble${index + 1}`;
            const element = document.getElementById(elementId);
            const offset = Array.isArray(scrollDetail)
                ? scrollDetail[0]
                : scrollDetail;
            const duration = Array.isArray(scrollDetail)
                ? scrollDetail[1]
                : 250;
            adjustOpacity(element, offset, duration);
        });
    });
}

const bubbleOffsets = [175, 350, 560, 650, 800];
addBubbleScene(bubbleOffsets);
