import { useEffect, useState } from 'react'
import { IVehicle, IVehicleSearchOptions } from '@/common/models/vehicle'

export const useVehicleFilter = (
    fetchedVehicles: IVehicle[] | null,
    searchOptions: IVehicleSearchOptions,
    itemsPerPage: number
) => {
    const [vehicles, setVehicles] = useState<IVehicle[]>([])
    const [totalPages, setTotalPages] = useState<number>(1)

    useEffect(() => {
        if (fetchedVehicles) {
            const filteredVehicles = fetchedVehicles.filter((vehicle) => {
                if (
                    searchOptions.make &&
                    vehicle.make.makeId.toLocaleString() !== searchOptions.make
                ) {
                    return false
                }
                if (
                    searchOptions.year &&
                    vehicle.year !== Number(searchOptions.year)
                ) {
                    return false
                }
                if (
                    searchOptions.bodyType &&
                    vehicle.bodyType.toLowerCase() !==
                        searchOptions.bodyType.toLowerCase()
                ) {
                    return false
                }
                if (
                    searchOptions.fuelType &&
                    vehicle.fuelType.toLowerCase() !==
                        searchOptions.fuelType.toLowerCase()
                ) {
                    return false
                }
                if (
                    searchOptions.gearboxType &&
                    vehicle.gearbox.toLowerCase() !==
                        searchOptions.gearboxType.toLowerCase()
                ) {
                    return false
                }
                if (
                    searchOptions.colour &&
                    vehicle.colour.toLowerCase() !==
                        searchOptions.colour.toLowerCase()
                ) {
                    return false
                }
                if (
                    searchOptions.doors &&
                    vehicle.doors !== Number(searchOptions.doors)
                ) {
                    return false
                }
                if (
                    searchOptions.seats &&
                    vehicle.seats !== Number(searchOptions.seats)
                ) {
                    return false
                }
                if (
                    searchOptions.historyType &&
                    vehicle.history.toLowerCase() !==
                        searchOptions.historyType.toLowerCase()
                ) {
                    return false
                }
                return true
            })

            setVehicles(filteredVehicles)
            setTotalPages(Math.ceil(filteredVehicles.length / itemsPerPage))
        }
    }, [searchOptions, fetchedVehicles, itemsPerPage])

    return { vehicles, totalPages }
}
