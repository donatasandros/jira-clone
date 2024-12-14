import type { Button as ButtonPrimitive } from 'bits-ui';
import { type VariantProps, tv } from 'tailwind-variants';
import Root from './button.svelte';

const buttonVariants = tv({
	base: 'focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-neutral-100 disabled:from-neutral-100 disabled:to-neutral-100 disabled:text-neutral-300 border border-neutral-200 shadow-sm',
	variants: {
		variant: {
			primary:
				'bg-gradient-to-b from-blue-600 to-blue-700 text-primary-foreground hover:from-blue-700 hover:to-blue-700',
			destructive:
				'bg-gradient-to-b from-amber-600 to-amber-700 text-destructive-foreground hover:from-amber-700 hover:to-amber-700',
			outline:
				'border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm',
			secondary: 'bg-white text-black hover:bg-neutral-100',
			ghost: 'border-transparent shadow-none hover:bg-accent hover:text-accent-foreground',
			muted: 'bg-neutral-200 text-neutral-600 hover:bg-neutral-200/80',
			teritary: 'bg-blue-100 text-blue-600 borde-transparent hover:bg-blue-200 shadow-none'
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-8 rounded-md px-3',
			xs: 'h-7 rounded-md px-2 text-xs',
			lg: 'h-12 rounded-md px-8',
			icon: 'h-8 w-8'
		}
	},
	defaultVariants: {
		variant: 'primary',
		size: 'default'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	//
	Root as Button,
	Root,
	buttonVariants,
	type Events as ButtonEvents,
	type Props as ButtonProps,
	type Events,
	type Props
};
