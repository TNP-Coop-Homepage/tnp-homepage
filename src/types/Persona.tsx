export type Persona = {
    description: string;
    displayName: string;
    iconSrc: string;
    primaryColor: string;
    secondaryColor: string | null;
    backgroundColor: string;
    socialLinks: {
        gitHub: string | null;
        // ...
    }
}