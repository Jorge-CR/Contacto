<?php

class usuarioDAOExt extends usuarioDAO {

 public function search($usuario, $contrasena) {
        $sql = 'SELECT usu_usuario, usu_contrasena FROM usuario WHERE usu_usuario = :nombre AND usu_contrasena = :contrasena';
        $params = array(
            ':nombre' => $usuario,
            ':contrasena' => $contrasena
        );
        return $this->query($sql, $params);
    }

}
