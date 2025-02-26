BEGIN;

CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,  
    "first_name" VARCHAR(100) NOT NULL, 
    "phone" VARCHAR(20),
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "api_keys" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "api_key" VARCHAR(255) UNIQUE NOT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP DEFAULT NULL
);


CREATE TABLE "flights_adsb" (
    "id" SERIAL PRIMARY KEY,
    "flight_number" VARCHAR(20) NOT NULL, -- Numéro de vol (ex: 123)
    "flight_icao" VARCHAR(20) NOT NULL,  -- Code ICAO complet du vol (ex: AFR123)
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "altitude" INTEGER,
    "speed" DOUBLE PRECISION,  -- Vitesse en nœuds ou km/h
    "heading" DOUBLE PRECISION,
    "squawk" VARCHAR(10),
    "seen" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Dernière mise à jour
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (flight_number, flight_icao) -- Ajout de la contrainte UNIQUE
);



CREATE TABLE "bags" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "name_of_bag" VARCHAR(255) NOT NULL,
    "flightNumber" VARCHAR(20) NOT NULL,
    "deviceID" VARCHAR(255) UNIQUE NOT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
