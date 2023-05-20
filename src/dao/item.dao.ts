import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item"

interface ICarDao{
    getAllCars(): Promise<Car[] | undefined>
    getCarById(id: string): Promise<Car | undefined>
    createCar(car: Car): Promise<Car | undefined>
    updateCar(id: string, car: Car): Promise<Car | undefined>
    deleteCar(id: string): Promise<any>
    
}

class CarDao implements ICarDao{
    async getAllCars(): Promise<Car[] | undefined>{
        try{
            const cars = await ItemModel.find({})
            return cars
        }catch(e){
            console.log(e)
        }
    }

    async getCarById(id: string): Promise<Car | undefined>{
        try{
            const product = await ItemModel.findOne({_id: id})
            return product as Car
        }catch(e){

        }
    }

    async createCar(car: Car): Promise<Car | undefined>{
        try{
            const newCar = await ItemModel.create(car)
            return newCar
        }catch(e){

        }
    }

    async updateCar(id: string, car: Car): Promise<Car | undefined>{
        try{
            const carUpdated = await ItemModel.findOneAndUpdate({ _id: id }, car, {
                new: true,
            });
            return carUpdated as Car;   
        }catch(e){
            
        }
    }
    
    async deleteCar(id: string): Promise<any>{
        try{
            const carDeleted = await ItemModel.deleteOne({ _id: id });
            return carDeleted;
        }catch(e){

        }
    }
}

export const carDaoService = new CarDao();