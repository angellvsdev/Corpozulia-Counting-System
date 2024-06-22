package com.corpozulia.counting.service;

import com.corpozulia.counting.models.Item;
import com.corpozulia.counting.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    // Método para crear un nuevo item
    public Item createItem(Item item) {
        return itemRepository.save(item);
    }

    // Método para obtener todos los items
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    // Método para obtener un item por su id
    public Optional<Item> getItemById(Long id) {
        return itemRepository.findById(id);
    }

    // Método para actualizar un item
    public Item updateItem(Long id, Item newItem) {
        return itemRepository.findById(id)
                .map(item -> {
                    item.setName(newItem.getName());
                    item.setDescription(newItem.getDescription());
                    item.setQuantity(newItem.getQuantity());
                    return itemRepository.save(item);
                })
                .orElse(null);
    }

    // Método para eliminar un item
    public boolean deleteItem(Long id) {
        if (itemRepository.existsById(id)) {
            itemRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

