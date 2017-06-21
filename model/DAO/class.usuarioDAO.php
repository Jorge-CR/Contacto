<?php

class usuarioDAO extends dataSource implements IUsuario {

    public function delete($id, $logico = true) {
        if ($logico === true) {
            $sql = 'UPDATE usuario SET usu_deleted_at = now() WHERE usu_id = :id';
            $params = array(
                ':id' => $id
            );
            return $this->execute($sql, $params);
        } else if ($logico === false) {
            $sql = 'DELETE FROM usuario WHERE usu_id = :id AND usu_deleted_at IS NULL';
            $params = array(
                ':id' => (integer) $id
            );
            return $this->execute($sql, $params);
        }
    }

    public function insert(\usuario $usuario) {
        $sql = 'INSERT INTO usuario (usu_nombre, usu_contrasena, rol_id) VALUES (:nombre, :contrasena, :rolId)';
        $params = array(
            ':nombre' => $usuario->getNombre(),
            ':contrasena' => $usuario->getContrasena(),
            ':rolId' => $usuario->getRolId(),
        );
        return $this->execute($sql, $params);
    }

    public function search($usuario, $contrasena) {
        $sql = 'SELECT usu_usuario, usu_contrasena FROM usuario WHERE usu_usuario = :nombre AND usu_contrasena = :contrasena';
        $params = array(
            ':nombre' => $usuario,
            ':contrasena' => $contrasena
        );
        return $this->query($sql, $params);
    }

    public function select() {
        $sql = 'SELECT usu_id,usu_usuario FROM usuario WHERE usu_deleted_at IS NULL';
        return $this->query($sql);
    }

    public function selectById($id) {
        $sql = 'SELECT usu_usuario, usu_contrasena FROM usuario WHERE usu_id = :id';
        $params = array(
            ':id' => $id
        );
        return $this->query($sql, $params);
    }

    public function update(\usuario $usuario) {
        $sql = 'UPDATE usuario SET usu_nombre = :nombre, usu_contrasena = :contrasena, rol_id = :rolid WHERE usu_id = :id';
        $params = array(
            ':nombre' => $usuario->getNombre(),
            ':contrasena' => $usuario->getContrasena($this->getConfig()->getHash()),
            ':rolid' => $usuario->getRolid(),
            ':id' => $usuario->getId()
        );
        return $this->execute($sql, $params);
    }

}
