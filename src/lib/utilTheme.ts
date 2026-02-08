export const toggleDark = (): void => {
    document.documentElement.classList.toggle("dark")
}

export const isDark = (): boolean => {
    return !!document.documentElement.classList.contains("dark");
};
