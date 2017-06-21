<?php

class contactoDAO extends dataSource implements IContacto {

    public function delete($id, $logico = true) {
        if ($logico === true) {
            $sql = 'UPDATE contactos SET con_deleted_at = now() WHERE con_id = :id';
            $params = array(
                ':id' => $id
            );
            return $this->execute($sql, $params);
        } else if ($logico === false) {
            $sql = 'DELETE FROM contactos WHERE con_id = :id AND con_deleted_at IS NULL';
            $params = array(
                ':id' => (integer) $id
            );
            return $this->execute($sql, $params);
        }
    }

    public function insert(\contacto $contacto) {
        $sql = 'INSERT INTO contactos (con_foto, con_nombre, con_apellidos, con_correo, con_telefono) VALUES (:foto, :nombre, :apellidos, :correo, :telefono)';
        $params = array(
            
            ':foto' => $contacto->getFoto(),
            ':nombre' => $contacto->getNombre(),
            ':apellidos' => $contacto->getApellidos(),
            ':correo' => $contacto->getCorreo(),
            ':telefono' => $contacto->getTelefono(),
      
        );
        return $this->execute($sql, $params);
    }

    public function search($nombre) {
        $sql = 'SELECT con_id, con_foto, con_nombre, con_apellidos, con_correo, con_telefono FROM contactos WHERE con_nombre = :nombre AND con_deleted_at IS NULL';
        $params = array(
            ':nombre' => $nombre
        );
        return $this->query($sql, $params);
    }

    public function select() {
        $sql = 'SELECT con_id,con_foto, con_nombre, con_apellidos, con_correo, con_telefono FROM contactos WHERE con_deleted_at IS NULL';
        return $this->query($sql);
    }

    public function selectById($id) {
        $sql = 'SELECT con_id, con_cedula, con_nombre, con_apellido, con_correo, con_telefono con_direccion FROM contacto WHERE con_id = :id';
        $params = array(
            ':id' => $id
        );
        return $this->query($sql, $params);
    }

    public function update(\contacto $contacto) {
        $sql = 'UPDATE contactos SET con_foto = :foto, con_nombre = :nombre, con_apellidos = :apellidos, con_correo = :correo, con_telefono = :telefono  WHERE con_id = :id';
        $params = array(
            ':foto' => $contacto->getFoto(),
            ':nombre' => $contacto->getNombre(),
            ':apellidos' => $contacto->getApellidos(),
            ':correo' => $contacto->getCorreo(),
            ':telefono' => $contacto->getTelefono(),
            ':id' => $contacto->getId(),
        );
        return $this->execute($sql, $params);
    }

}
