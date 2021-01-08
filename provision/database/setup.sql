CREATE DATABASE test;

CREATE USER dev WITH encrypted password 'dev' SUPERUSER;

GRANT ALL ON DATABASE comments TO dev;

\connect comments