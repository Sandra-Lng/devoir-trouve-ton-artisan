USE trouve_ton_artisan;

INSERT INTO categories (id, nom, slug) VALUES
(1, 'Bâtiment', 'batiment'),
(2, 'Alimentation', 'alimentation'),
(3, 'Fabrication', 'fabrication'),
(4, 'Services', 'services');

INSERT INTO specialites (id, nom, categorie_id) VALUES
(1, 'Chauffagiste', 1),
(2, 'Menuisier', 1),
(3, 'Electricien', 1),
(4, 'Plombier', 1),
(5, 'Boucher', 2),
(6, 'Boulanger', 2),
(7, 'Chocolatier', 2),
(8, 'Traiteur', 2),
(9, 'Bijoutier', 3),
(10, 'Couturier', 3),
(11, 'Ferronier', 3),
(12, 'Coiffeur', 4),
(13, 'Fleuriste', 4),
(14, 'Toiletteur', 4),
(15, 'Webdesign', 4);

SET @apropos = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.';

INSERT INTO artisans
(slug, nom, note, ville, apropos, email, site_web, top, specialite_id)
VALUES
('orville-salmons', 'Orville Salmons', 5, 'Evian',
 @apropos, 'o-salmons@live.com', NULL, TRUE, 1),

('boutot-et-fils', 'Boutot & fils', 4.7, 'Bourg-en-Bresse',
 @apropos, 'boutot-menuiserie@gmail.com',
 'https://boutot-menuiserie.com', FALSE, 2),

('mont-blanc-electricite', 'Mont Blanc Eléctricité', 4.5, 'Chamonix',
 @apropos, 'contact@mont-blanc-electricite.com',
 'https://mont-blanc-electricite.com', FALSE, 3),

('vallis-bellemare', 'Vallis Bellemare', 4, 'Vienne',
 @apropos, 'v.bellemare@gmail.com',
 'https://plomberie-bellemare.com', FALSE, 4);

 INSERT INTO artisans
(slug, nom, note, ville, apropos, email, site_web, top, specialite_id)
VALUES
('boucherie-dumont', 'Boucherie Dumont', 4.5, 'Lyon',
 @apropos, 'boucherie.dumond@gmail.com', NULL, FALSE, 5),

('au-pain-chaud', 'Au pain chaud', 4.8, 'Montélimar',
 @apropos, 'aupainchaud@hotmail.com', NULL, TRUE, 6),

('chocolaterie-labbe', 'Chocolaterie Labbé', 4.9, 'Lyon',
 @apropos, 'chocolaterie-labbe@gmail.com',
 'https://chocolaterie-labbe.fr', TRUE, 7),

('traiteur-truchon', 'Traiteur Truchon', 4.1, 'Lyon',
 @apropos, 'contact@truchon-traiteur.fr',
 'https://truchon-traiteur.fr', FALSE, 8);

 INSERT INTO artisans
(slug, nom, note, ville, apropos, email, site_web, top, specialite_id)
VALUES
('claude-quinn', 'Claude Quinn', 4.2, 'Aix-les-Bains',
 @apropos, 'claude.quinn@gmail.com', NULL, FALSE, 9),

('amitee-lecuyer', 'Amitee Lécuyer', 4.5, 'Annecy',
 @apropos, 'a.amitee@hotmail.com',
 'https://lecuyer-couture.com', FALSE, 10),

('ernest-carignan', 'Ernest Carignan', 5, 'Le Puy-en-Velay',
 @apropos, 'e-carigan@hotmail.com', NULL, FALSE, 11);

 INSERT INTO artisans
(slug, nom, note, ville, apropos, email, site_web, top, specialite_id)
VALUES
('royden-charbonneau', 'Royden Charbonneau', 3.8, 'Saint-Priest',
 @apropos, 'r.charbonneau@gmail.com', NULL, FALSE, 12),

('leala-dennis', 'Leala Dennis', 3.8, 'Chambéry',
 @apropos, 'l.dennos@hotmail.fr',
 'https://coiffure-leala-chambery.fr', FALSE, 12),

('cest-suphair', 'C''est sup''hair', 4.1, 'Romans-sur-Isère',
 @apropos, 'sup-hair@gmail.com',
 'https://sup-hair.fr', FALSE, 12),

('le-monde-des-fleurs', 'Le monde des fleurs', 4.6, 'Annonay',
 @apropos, 'contact@le-monde-des-fleurs-annonay.fr',
 'https://le-monde-des-fleurs-annonay.fr', FALSE, 13),

('valerie-laderoute', 'Valérie Laderoute', 4.5, 'Valence',
 @apropos, 'v-laredoute@gmail.com', NULL, FALSE, 14),

('cm-graphisme', 'CM Graphisme', 4.4, 'Valence',
 @apropos, 'contact@cm-graphisme.com',
 'https://cm-graphisme.com', FALSE, 15);