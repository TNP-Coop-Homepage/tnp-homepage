type NavigationLinkProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const NavigationLink = ({ children, onClick }: NavigationLinkProps) => {
    return (
        <div onClick={onClick}>
            {children}
        </div>
    );
};

export default NavigationLink; 