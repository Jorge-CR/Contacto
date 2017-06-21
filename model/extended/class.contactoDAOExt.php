<?php

class contactoDAOExt extends contactoDAO {

    public function searchfornameorlastname($textobuscar) {
        $sql = 'SELECT con_id, con_foto, con_nombre, con_apellidos, con_correo, con_telefono FROM contactos WHERE con_deleted_at IS NULL AND con_nombre like :textobuscar or con_apellidos like :textobuscar  ';
        $params = array(
            ':textobuscar' => "%" . $textobuscar . "%"
        );
        return $this->query($sql, $params);
    }

}
