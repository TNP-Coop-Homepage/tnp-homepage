export type Persona = {
    description: string;
    displayName: string;
    iconSrc: string;
    primaryColor: string;
    secondaryColor: string | null;
    socialLinks: {
        gitHub: string | null;
        // ...
    }
}