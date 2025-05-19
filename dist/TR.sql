delimiter $$

drop trigger if exists after_insert_line;
create trigger after_insert_line
after insert on hopi_hari_db.line
for each row
begin

declare wait_time int;
declare line_count int;
declare total_wait int;

select tempo_espera into wait_time
from atracoes 
where id = new.atracoes_id;

select count(users_id) into line_count
from hopi_hari_db.line 
where atracoes_id = new.atracoes_id;

set total_wait = wait_time * line_count;

insert into notifications (description, users_id, atracoes_id, status)
values (concat(total_wait, " MINUTOS DE ESPERA PARA O BRINQUEDO"), new.users_id, new.atracoes_id, TRUE);

end$$

delimiter ; 