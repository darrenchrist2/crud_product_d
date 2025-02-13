# Use PHP 8.2 with Apache
FROM php:8.2-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev unzip git curl libpng-dev libjpeg-dev libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY apache.conf /etc/apache2/sites-available/000-default.conf

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . .

# Install Symfony dependencies
RUN COMPOSER_ALLOW_SUPERUSER=1 composer install --no-interaction --prefer-dist --optimize-autoloader

# Change permissions
RUN chown -R www-data:www-data /var/www/html/var /var/www/html/public /var/www/html/config

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
