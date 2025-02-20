#!/bin/sh
set -e

# Tunggu database siap sebelum menjalankan migrasi
echo "Waiting for database..."
until php bin/console doctrine:query:sql "SELECT 1" > /dev/null 2>&1; do
  sleep 2
done

# Jalankan migrasi database
php bin/console doctrine:migrations:migrate --no-interaction

# Jalankan perintah default (Apache)
exec "$@"
