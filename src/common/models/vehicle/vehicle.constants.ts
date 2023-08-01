import type { IOption } from '@/common'

export const bodyTypes: IOption[] = [
    { value: 'convertible', label: 'Convertible' },
    { value: 'coupe', label: 'Coupe' },
    { value: 'estate', label: 'Estate' },
    { value: 'hatchback', label: 'Hatchback' },
    { value: 'mpv', label: 'MPV' },
    { value: 'saloon', label: 'Saloon' },
    { value: 'suv', label: 'SUV' },
]

export const colours: IOption[] = [
    { value: 'black', label: 'Black' },
    { value: 'blue', label: 'Blue' },
    { value: 'brown', label: 'Brown' },
    { value: 'gold', label: 'Gold' },
    { value: 'green', label: 'Green' },
    { value: 'grey', label: 'Grey' },
    { value: 'orange', label: 'Orange' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'silver', label: 'Silver' },
    { value: 'white', label: 'White' },
    { value: 'yellow', label: 'Yellow' },
]

export const fuelTypes: IOption[] = [
    { value: 'diesel', label: 'Diesel' },
    { value: 'electric', label: 'Electric' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'petrol', label: 'Petrol' },
]

export const doors: IOption[] = [
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
]

export const gearboxTypes: IOption[] = [
    { value: 'automatic', label: 'Automatic' },
    { value: 'manual', label: 'Manual' },
    { value: 'semi_automatic', label: 'Semi-Automatic' },
]

export const historyTypes: IOption[] = [
    { value: 'fsh', label: 'FSH' },
    { value: 'fdsh', label: 'FDSH' },
    { value: 'partial', label: 'Partial' },
    { value: 'yes', label: 'Yes' },
]

export const makes: IOption[] = [
    { value: 'alfa_romeo', label: 'Alfa Romeo' },
    { value: 'audi', label: 'Audi' },
    { value: 'bmw', label: 'BMW' },
    { value: 'citroen', label: 'Citroen' },
    { value: 'fiat', label: 'Fiat' },
    { value: 'ford', label: 'Ford' },
    { value: 'honda', label: 'Honda' },
    { value: 'hyundai', label: 'Hyundai' },
    { value: 'jaguar', label: 'Jaguar' },
    { value: 'land_rover', label: 'Land Rover' },
    { value: 'lexus', label: 'Lexus' },
    { value: 'mazda', label: 'Mazda' },
    { value: 'mitsubishi', label: 'Mitsubishi' },
    { value: 'mercedes_benz', label: 'Mercedes-Benz' },
    { value: 'mini', label: 'Mini' },
    { value: 'nissan', label: 'Nissan' },
    { value: 'porsche', label: 'Porsche' },
    { value: 'renault', label: 'Renault' },
    { value: 'seat', label: 'Seat' },
    { value: 'subaru', label: 'Subaru' },
    { value: 'suzuki', label: 'Suzuki' },
    { value: 'tesla', label: 'Tesla' },
    { value: 'toyota', label: 'Toyota' },
    { value: 'vauxhall', label: 'Vauxhall' },
    { value: 'volvo', label: 'Volvo' },
    { value: 'volkswagen', label: 'Volkswagen' },
]

export const seats: IOption[] = [
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
]

export const vehicleStatuses = [
    { value: 'for_sale', label: 'For Sale', color: 'secondary' },
    { value: 'sold', label: 'Sold', color: 'success' },
]

export const years: IOption[] = [
    { value: 2021, label: '2021' },
    { value: 2020, label: '2020' },
    { value: 2019, label: '2019' },
    { value: 2018, label: '2018' },
    { value: 2017, label: '2017' },
    { value: 2016, label: '2016' },
    { value: 2015, label: '2015' },
    { value: 2014, label: '2014' },
    { value: 2013, label: '2013' },
    { value: 2012, label: '2012' },
    { value: 2011, label: '2011' },
    { value: 2010, label: '2010' },
]
