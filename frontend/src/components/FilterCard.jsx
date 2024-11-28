import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

const filterData = [
  {
    filterType: "Location",
    array: ["Dharan", "Biratnagar", "Chitwan", "Kathmandu", "Lalitpur"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42k-1lakh", "1lakh-5lakh"],
  },
]

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-xl">Filter Jobs</h1>
      <hr className="mt-3" />

      {filterData.map((data, index) => (
        <div key={index} className="mt-5">
          <h1 className="font-bold text-lg">{data.filterType}</h1>
          <RadioGroup name={data.filterType}>
            {data.array.map((item, index) => {
              return (
                <div key={index} className="flex items-center space-x-2 my-1">
                  <RadioGroupItem value={item} id={item} />
                  <Label htmlFor={item} className="cursor-pointer">
                    {item}
                  </Label>
                </div>
              )
            })}
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}

export default FilterCard
