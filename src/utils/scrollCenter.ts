export const scrollCenter = (ref: any) => {
    if (ref.current) {
        const container = ref.current;
        container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
};
