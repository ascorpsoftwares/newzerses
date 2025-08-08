<?php
/**
 * eCommerce Demo Import Options 
 * Demo Import File 
 */
function popular_ecommerce_import_files() {
    return array(
      array(
        'import_file_name'           => 'Default',
        'categories'                 => array( 'Ecommerce1','Fashion'),
        'import_file_url'            => 'http://demo.themerelic.com/demo-import/popular-ecommerce/populare-commerce.xml',
        'import_widget_file_url'     => 'http://demo.themerelic.com/demo-import/popular-ecommerce/widgets.wie',
        'import_customizer_file_url' => 'http://demo.themerelic.com/demo-import/popular-ecommerce/customizer.dat',
        
        'import_preview_image_url'   => 'https://themerelic.com/wp-content/uploads/2018/05/screenshot.png',
        'import_notice'              => __( 'After you import this demo, you will have to setup the slider separately.', 'popular-ecommerce' ),
        'preview_url'                => 'http://demo.themerelic.com/popular-ecommerce/',
      ),
      array(
        'import_file_name'           => 'Default',
        'categories'                 => array( 'Ecommerce','Fashion'),
        'import_file_url'            => 'http://demo.themerelic.com/demo-import/popular-ecommerce/populare-commerce.xml',
        'import_widget_file_url'     => 'http://demo.themerelic.com/demo-import/popular-ecommerce/widgets.wie',
        'import_customizer_file_url' => 'http://demo.themerelic.com/demo-import/popular-ecommerce/customizer.dat',
        
        'import_preview_image_url'   => 'https://themerelic.com/wp-content/uploads/2018/05/screenshot.png',
        'import_notice'              => __( 'After you import this demo, you will have to setup the slider separately.', 'popular-ecommerce' ),
        'preview_url'                => 'http://demo.themerelic.com/popular-ecommerce/',
      ),
    );
  }
  add_filter( 'pt-ocdi/import_files', 'popular_ecommerce_import_files' );


  
/*****************************************************************
*         After Demo Import Functions
*************************************************************/
function popular_ecommerce_after_import_setup() {
  // Assign menus to their locations.
  $main_menu = get_term_by( 'name', 'Primary Menu', 'nav_menu' );
  $footer_menu = get_term_by( 'name', 'Primary Menu', 'nav_menu' );

  set_theme_mod( 'nav_menu_locations', array(
    'menu-1' => $main_menu->term_id,
    'footer-menu' => $footer_menu->term_id,
    )
  );

  // Assign front page and posts page (blog page).
  $front_page_id = get_page_by_title( 'Sample Page ' );
  $blog_page_id  = get_page_by_title( 'Blog' );

  update_option( 'show_on_front', 'page' );
  update_option( 'page_on_front', $front_page_id->ID );
  update_option( 'page_for_posts', $blog_page_id->ID );

}
add_action( 'pt-ocdi/after_import', 'popular_ecommerce_after_import_setup' );


