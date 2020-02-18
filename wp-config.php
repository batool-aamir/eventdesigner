<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'qDUBOn7hJS' );

/** MySQL database username */
define( 'DB_USER', 'qDUBOn7hJS' );

/** MySQL database password */
define( 'DB_PASSWORD', 'ezFLZlffyf' );

/** MySQL hostname */
define( 'DB_HOST', 'remotemysql.com' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'I=6*0@hvAcbQ++A2t#_Ev@*z#j/-D@O[*crd0Chdlp_s#~,wFjG$xxpfzHG(.Ni+' );
define( 'SECURE_AUTH_KEY',  '7^@F*Y?`YsA)R!|I`huh :+Jime9weTt{oymiX,*u,IJeg3k>L!94oXcJaV~>:e=' );
define( 'LOGGED_IN_KEY',    '2gxfA.1*4Y.Rg5RoInIvoyAnQ3n>}s+KK=Yj!_n2sE4Ip$YwMjft@#kBn:`QQ^9B' );
define( 'NONCE_KEY',        '%1aThp@kLg5NJd yHj_<5K2K}@Vu*3Z`Dl&vW:>bw*8=SE(|G)@||(+]{j~{#}iz' );
define( 'AUTH_SALT',        'o!p,+~@3pdzF^hfXAX.Agaky21~vMiw&WALqj69( 8s*=:~8j^B-7ViK5]Y~G;,K' );
define( 'SECURE_AUTH_SALT', 'OXeU>ANEe=movr7h/Ly.O8!)k!3VYXN]h ^0^<f~UT,[{aoN!gZr{,kxJ$HoE[qr' );
define( 'LOGGED_IN_SALT',   '|*7r<G.5jO~_9PP(q)`n05-D,UhL{,llx)hCQ~c0 aY;-)B1|2q4am$`|j:9N*J2' );
define( 'NONCE_SALT',       'T;NOFMMy^cWtDLC-3YwtEhz#pc4PJ%2YuHTM#CR+CO_;096v(!fdzR2Z{ig+#>J.' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
