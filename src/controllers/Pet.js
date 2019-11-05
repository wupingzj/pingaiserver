"use strict";

import { writeJson } from '../../utils/writer.js';
import { addPet as _addPet, deletePet as _deletePet, findPetsByStatus as _findPetsByStatus, findPetsByTags as _findPetsByTags, getPetById as _getPetById, updatePet as _updatePet, updatePetWithForm as _updatePetWithForm, uploadFile as _uploadFile } from '../service/PetService';);

export function addPet (req, res, next) {
  const body = req.swagger.params["body"].value;
  _addPet(body)
    .then(function (response) {
      writeJson(res, response);
    })
    .catch(function (response) {
      writeJson(res, response);
    });
}

export function deletePet (req, res, next) {
  const petId = req.swagger.params["petId"].value;
  const api_key = req.swagger.params["api_key"].value;
  _deletePet(petId,api_key)
    .then(function (response) {
      writeJson(res, response);
    })
    .catch(function (response) {
      writeJson(res, response);
    });
}

export function findPetsByStatus (req, res, next) {
  const status = req.swagger.params["status"].value;
  _findPetsByStatus(status)
    .then(function (response) {
      writeJson(res, response);
    })
    .catch(function (response) {
      writeJson(res, response);
    });
}

export function findPetsByTags (req, res, next) {
  const tags = req.swagger.params["tags"].value;
  _findPetsByTags(tags)
    .then(function (response) {
      writeJson(res, response);
    })
    .catch(function (response) {
      writeJson(res, response);
    });
}

export function getPetById (req, res, next) {
  const petId = req.swagger.params["petId"].value;
  _getPetById(petId)
    .then(function (response) {
      writeJson(res, response);
    })
    .catch(function (response) {
      writeJson(res, response);
    });
}

export function updatePet (req, res, next) {
  const body = req.swagger.params["body"].value;
  _updatePet(body)
    .then(function (response) {
      writeJson(res, response);
    })
    .catch(function (response) {
      writeJson(res, response);
    });
}

export function updatePetWithForm (req, res, next) {
  const petId = req.swagger.params["petId"].value;
  const name = req.swagger.params["name"].value;
  const status = req.swagger.params["status"].value;
  _updatePetWithForm(petId,name,status)
    .then(function (response) {
      writeJson(res, response);
    })
    .catch(function (response) {
      writeJson(res, response);
    });
}

export function uploadFile (req, res, next) {
  const petId = req.swagger.params["petId"].value;
  const additionalMetadata = req.swagger.params["additionalMetadata"].value;
  const file = req.swagger.params["file"].value;
  _uploadFile(petId,additionalMetadata,file)
    .then(function (response) {
      writeJson(res, response);
    })
    .catch(function (response) {
      writeJson(res, response);
    });
}
