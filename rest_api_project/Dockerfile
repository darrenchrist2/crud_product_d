# Gunakan PHP 8.2 dengan Apache
FROM php:8.2-apache

# Install system dependencies yang diperlukan
RUN apt-get update && apt-get install -y \
    libzip-dev unzip git curl \
    && docker-php-ext-install zip pdo pdo_mysql

# Aktifkan mod_rewrite di Apache
RUN a2enmod rewrite

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Konfigurasi Apache
COPY apache.conf /etc/apache2/sites-available/000-default.conf

# Set working directory
WORKDIR /var/www/html

# Copy project files dengan lebih spesifik
COPY . . 

# Install Symfony dependencies
RUN COMPOSER_ALLOW_SUPERUSER=1 composer install --no-interaction --prefer-dist --optimize-autoloader

# Ubah hak kepemilikan agar sesuai dengan user Apache
RUN chown -R www-data:www-data /var/www/html/var /var/www/html/public /var/www/html/config

# Expose port 80 untuk Apache
EXPOSE 80

# Copy dan atur permission untuk entrypoint.sh
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Gunakan entrypoint.sh sebagai entrypoint utama
ENTRYPOINT ["/entrypoint.sh"]

# Jalankan Apache sebagai perintah default
CMD ["apache2-foreground"]
