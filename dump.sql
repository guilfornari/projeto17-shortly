--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Homebrew)
-- Dumped by pg_dump version 14.7 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: shortenedUrls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."shortenedUrls" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer,
    "createdAt" timestamp without time zone DEFAULT now()
);


--
-- Name: shortenedUrls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."shortenedUrls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shortenedUrls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."shortenedUrls_id_seq" OWNED BY public."shortenedUrls".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: shortenedUrls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortenedUrls" ALTER COLUMN id SET DEFAULT nextval('public."shortenedUrls_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, 'ac69e68b-2a9a-441a-b365-f17d9edf8689', '2023-05-20 12:19:09.065088');
INSERT INTO public.sessions VALUES (2, 1, 'c0c6a757-1c6b-434d-808b-eece40edb6ea', '2023-05-20 12:26:22.963216');
INSERT INTO public.sessions VALUES (3, 2, 'c754507a-4698-4714-b847-2e9e6b62e799', '2023-05-20 12:32:54.59785');
INSERT INTO public.sessions VALUES (4, 2, 'bdce4eff-bd7a-41a4-bd3d-03c4855070de', '2023-05-20 14:01:38.173818');
INSERT INTO public.sessions VALUES (5, 1, '733a01b7-ee44-4bd3-bc21-7533ae77c821', '2023-05-20 17:35:22.98908');
INSERT INTO public.sessions VALUES (6, 3, 'def6a6e2-05cd-43d1-88c0-465ba8b8cd56', '2023-05-20 17:37:06.197133');


--
-- Data for Name: shortenedUrls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."shortenedUrls" VALUES (3, 2, 'https://www.google.com.br', 'https://www.google.com.br', 1, '2023-05-20 14:09:43.860101');
INSERT INTO public."shortenedUrls" VALUES (8, 2, 'https://www.google.com.br', 'l3u7if2rizNQDlU2GUbXG', 1, '2023-05-20 14:45:51.858194');
INSERT INTO public."shortenedUrls" VALUES (9, 2, 'https://www.google.com.br', 'qW21sPdh3hzaPHZ4kGVoY', 1, '2023-05-20 14:46:01.209528');
INSERT INTO public."shortenedUrls" VALUES (11, 1, 'https://www.google.com.br', 'mZAe-0ZucreU01Cu2jp_n', 0, '2023-05-20 17:38:01.405757');
INSERT INTO public."shortenedUrls" VALUES (12, 1, 'https://www.google.com.br', 'yW8Eg09JnlOxIiPP37F8q', 0, '2023-05-20 17:38:04.917815');
INSERT INTO public."shortenedUrls" VALUES (13, 1, 'https://www.google.com.br', 'olNH2h-qfA8iPqQYyMD9H', 0, '2023-05-20 17:38:07.51379');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Jhon', 'jhon@driven.com.br', '$2b$10$En5Gn7ORiQXBKB.h1k/22eObYSn9.bsI9E4VgvKQTmO7urS/fNku.', '2023-05-20 10:54:59.783743');
INSERT INTO public.users VALUES (2, 'Jhon 2', 'jhon2@driven.com.br', '$2b$10$ma1rbgY5ylHggt79qdChaetxv5pnUxHL/22dGXXSTktfrO0G20plu', '2023-05-20 12:32:43.283869');
INSERT INTO public.users VALUES (3, 'Jhon 3', 'jhon3@driven.com.br', '$2b$10$isdfOYgeWBcyPkqNht52.Oxpk8rHhudQAYhAvAZt8.4NfJmk4cNSi', '2023-05-20 17:36:56.945574');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 6, true);


--
-- Name: shortenedUrls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."shortenedUrls_id_seq"', 13, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: shortenedUrls shortenedUrls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortenedUrls"
    ADD CONSTRAINT "shortenedUrls_pkey" PRIMARY KEY (id);


--
-- Name: shortenedUrls shortenedUrls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortenedUrls"
    ADD CONSTRAINT "shortenedUrls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: shortenedUrls shortenedUrls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortenedUrls"
    ADD CONSTRAINT "shortenedUrls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

