const ServiceStorage = {
    get<T>(key: string): T | null {
        if (typeof window === "undefined") return null;

        const content = localStorage.getItem(key);

        if (!content) return null;

        try {
            return JSON.parse(content) as T;
        } catch {
            localStorage.removeItem(key);
            return null;
        }
    },

    set<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    },

    clear(): void {
        localStorage.clear();
    },
};

export default ServiceStorage;