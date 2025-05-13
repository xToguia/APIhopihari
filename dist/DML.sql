INSERT INTO user_has_atracoes (nome, tempo_espera, status, area) VALUES
("Montezum", 30, "Movimentado", "Mistieri"),
("Giranda Mundi", 30, "Movimentado", "Kaminda Mundi"),
("Katakuri's Stinky white stuff", 30, "Extremamente movimentado", "Dimensão dos Espelho")

INSERT INTO users (id, first_name, last_name, email, password, birth_date, phone) VALUES
("Sung", "Jinwoo", "sung.vanguard@gmail.com", "123456789", "1999-12-12", "14999999999"),
("Choi", "Jong In", "choi.secret@gmail.com", "123456789", "1999-12-12", "14999999999"),
("Cha", "Hae in", "cha.middler@gmail.com", "123456789", "1999-12-12", "14999999999"),
("Sung", "Monarch", "sung.ogmeta@gmail.com", "123456789", "1999-12-12", "14999999999"),
("Beru", "King", "beru.king@gmail.com", "123456789", "1999-12-12", "14999999999"),
("Igris", "Bloodred", "igris.bloodred@gmail.com", "123456789", "1999-12-12", "14999999999")

INSERT INTO line (users_id, atracoes_id) VALUES
(13, 28),
(14, 28),
(15, 29),
(16, 29),
(17,30),
(18, 30)

select users.first_name, line.users_id, line.atracoes_id
from line
inner join atracoes 
on atracoes_id = line.atracoes_id
inner join users
on users_id = line.users_id;
