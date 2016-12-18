/**
 * Toggles mobile navigation after click on hamburger icon.
 * Closes navigation after click on logo or navigation item.
 *
 * @param {HTMLElement} element Page header element.
 */
export default function mobileNavigation( element ) {
	element.querySelector( '.page-nav-toggle' )
		.addEventListener( 'click', () => element.classList.toggle( 'page-nav-active' ) );

	[].forEach.call( element.querySelectorAll( 'a:not(.page-nav-toggle)' ), ( menuItem ) => {
		menuItem.addEventListener( 'click', () => element.classList.remove( 'page-nav-active' ) );
	} );
}
