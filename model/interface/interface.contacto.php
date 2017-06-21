<?php

interface IContacto {

    public function select();

    public function selectById($id);

    public function insert(contacto $contacto);

    public function update(contacto $contacto);

    public function delete($id, $logico);

    public function search($nombre);
}