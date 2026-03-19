import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/** Animate elements in when they scroll into view */
export function scrollReveal(
	selector: string | Element | Element[],
	opts: {
		y?: number;
		x?: number;
		duration?: number;
		stagger?: number;
		delay?: number;
		start?: string;
	} = {}
) {
	const {
		y = 60,
		x = 0,
		duration = 1,
		stagger = 0.15,
		delay = 0,
		start = 'top 85%'
	} = opts;

	return gsap.from(selector, {
		y,
		x,
		opacity: 0,
		duration,
		stagger,
		delay,
		ease: 'power3.out',
		scrollTrigger: {
			trigger: typeof selector === 'string' ? selector : (Array.isArray(selector) ? selector[0] : selector),
			start,
			toggleActions: 'play none none none'
		}
	});
}

/** Hero entrance animation */
export function heroEntrance(container: Element) {
	const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

	tl.from(container.querySelectorAll('.hero-line'), {
		y: 80,
		opacity: 0,
		duration: 1.2,
		stagger: 0.12
	})
		.from(
			container.querySelectorAll('.hero-sub'),
			{ y: 30, opacity: 0, duration: 0.8 },
			'-=0.6'
		)
		.from(
			container.querySelectorAll('.hero-cta'),
			{ y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
			'-=0.4'
		);

	return tl;
}

/** Staggered card entrance */
export function staggerCards(selector: string, container?: Element) {
	const target = container ? container.querySelectorAll(selector) : selector;

	return gsap.from(target, {
		y: 80,
		opacity: 0,
		duration: 0.8,
		stagger: 0.2,
		ease: 'power3.out',
		scrollTrigger: {
			trigger: container || selector,
			start: 'top 80%',
			toggleActions: 'play none none none'
		}
	});
}

/** Float animation for orbs */
export function floatOrbs(elements: NodeListOf<Element> | Element[]) {
	elements.forEach((el, i) => {
		gsap.to(el, {
			x: `random(-60, 60)`,
			y: `random(-60, 60)`,
			duration: gsap.utils.random(8, 14),
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
			delay: i * 0.5
		});
	});
}

/** Magnetic hover effect */
export function magneticHover(el: HTMLElement) {
	const handleMove = (e: MouseEvent) => {
		const rect = el.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		gsap.to(el, { x: x * 0.15, y: y * 0.15, duration: 0.3, ease: 'power2.out' });
	};

	const handleLeave = () => {
		gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
	};

	el.addEventListener('mousemove', handleMove);
	el.addEventListener('mouseleave', handleLeave);

	return () => {
		el.removeEventListener('mousemove', handleMove);
		el.removeEventListener('mouseleave', handleLeave);
	};
}
