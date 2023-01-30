# WRITE YOUR FUNCTIONS HERE
def get_pet_shop_name(pet_shop):
    return pet_shop["name"]

def get_total_cash(pet_shop):
    return pet_shop["admin"]["total_cash"]

def add_or_remove_cash(pet_shop,amount):
    pet_shop["admin"]["total_cash"]+= amount
    
def get_pets_sold(pet_shop):
    return pet_shop["admin"]["pets_sold"]

def increase_pets_sold(pet_shop,amount):
    pet_shop["admin"]["pets_sold"]+= amount

def get_stock_count(pet_shop):
    return len(pet_shop["pets"])

def get_pets_by_breed(pet_shop,breed):
    found_pets=[]
    for pet in pet_shop["pets"]:
        if pet["breed"]==breed:
            found_pets.append(pet)
    return found_pets

def find_pet_by_name(pet_shop,name):
    found_pets=None
    for pet in pet_shop["pets"]:
        if pet["name"]==name:
            found_pets=pet
    return found_pets

def remove_pet_by_name(pet_shop,name):
    index=0
    for pet in pet_shop["pets"]:
        if pet["name"]==name:
            pet_shop["pets"].remove(index)
        inded =+ 1
# Not working....still need to fix

def add_pet_to_stock(pet_shop,new_pet):
    pass

def get_customer_cash (customer):
    pass

def remove_customer_cash (customer):
    pass

def get_customer_count(customers):
    pass

def add_pet_to_customer (customer, new_pet):
    pass



