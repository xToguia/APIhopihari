select * from users;

select * from atracoes; #8
select * from hopi_hari_db.line;

insert into hopi_hari_db.line (atracoes_id, users_id) values (8, 5);

select tempo_espera from atracoes where id = 8; #5 min
select count(users_id) from hopi_hari_db.line where atracoes_id = 8; #1 pessoa

select
(select tempo_espera from atracoes where id = 8) *
(select count(users_id) from hopi_hari_db.line where atracoes_id = 8) 
as tempo_espera_total;

desc notifications;
insert into notifications (description ,users_id, atracoes_id, tempo_espera, status)
values (concat(tempo_espera_total,"MINUTOS DE ESPERA PARA O BRINQUEDO"), 8, 5, TRUE);

select * from notifications;