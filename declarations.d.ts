// global declarations

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.json' {
    const value: any;
    export default value;
}

declare function require(moduleName: string): any;

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module 'aos' {
    interface AosOptions {
        // Add any custom options here
    }
  
    interface Aos {
        init(options?: AosOptions): void;
        refresh(): void;
    }
  
    interface HTMLElement {
        dataset: DOMStringMap & {
            aos?: string;
            // Add any other custom data attributes here
        };
    }
  
    const aos: Aos;
    export default aos;
}