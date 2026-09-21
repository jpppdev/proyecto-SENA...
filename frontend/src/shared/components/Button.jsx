// Componente Button 
export default function Button ({

    // props.. parámetros que recibe 
    variant = "primary",
    size = "md",
    type = "button",
    children,
    ...props
}){

    const variants = {
        primary : "bg-[var(--semantic-brand)] text-[color:var(--text-inverse)] hover:bg-[var(--color-brand-hover)]",
        
        secondary : "border border-[var(--color-border-clear)] bg-[var(--semantic-brand)] text-[color:var(--text-inverse)] hover:bg-[var(--color-brand-hover)] "
        
    };

    const sizes = {
        sm: `
            h-8
            px-4
            before:absolute before:content-['']
            before:-inset-y-[9px] before:-inset-x-[0px]
            `,
        md: "h-10 px-4 before:absolute before:content-[''] before:-inset-y-[4px] before:-inset-x-[0px]"
    }
    return(
        <button
            type={type}
            className={`
                text-text-inverse
                relative
                inline-flex items-center justify-center
                rounded-md
                transition-colors
                ${variants[variant]}
                ${sizes[size]}
                `}
                {...props}
            >
            {children}
        </button>
    )
}