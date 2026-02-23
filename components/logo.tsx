import Image, { ImageProps } from 'next/image';

interface LogoProps extends Omit<ImageProps, 'src' | 'alt'> {
    className?: string;
    text?: string;
    textClassName?: string;
    containerClassName?: string;
}

export default function Logo({ className, containerClassName, textClassName, text, width = 40, height = 40, ...props }: LogoProps) {
    return (
        <div className={`flex items-center ${containerClassName || ''}`}>
            <Image
                src="/images/Logo.png"
                alt="Logo"
                width={width}
                height={height}
                className={className}
                {...props}
            />
            {text && (
                <span className={`text-3xl font-bold font-sans tracking-tight ${textClassName || ''}`}>{text}</span>
            )}
        </div>
    );
}