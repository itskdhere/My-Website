git pull
sleep 1
copy nginx/sites-available/default /etc/nginx/sites-available/default
copy nginx/nginx.conf /etc/nginx/nginx.conf
sleep 1
nginx -s reload
sleep 1
pm2 restart 0
sleep 2
systemctl status nginx
pm2 list