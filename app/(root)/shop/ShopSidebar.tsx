import axiosInstance from '@/app/utiliz/axiosInstance';
import { getParams } from '@/globalRedux/featured/category/categorySlice';
import { Checkbox, FormControlLabel, Slider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ShopSidebar = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory= useSelector((state: any) => state.category.data.category);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [rating, setRating] = useState(0);
  
  useEffect(() =>{
    const getCategory = async() =>{
      const categories = await axiosInstance.get('get-categories');
      setCategories(categories.data);
    }
    getCategory();
  },[])
  
  const handleCheckBox = (category: string) => {
    if (event.target.checked) {
      dispatch(getParams({category: [...selectedCategory, category]}));
    } else {
      const remaining = selectedCategory.filter((filterCategory: string) => filterCategory != category);
      dispatch(getParams({category: remaining}));
    }
  }

  const handleSliderChange = (event, newValue: any) => {
    setPriceRange(newValue);
    dispatch(getParams({minPrice: newValue[0], maxPrice: newValue[1]}));
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="w-full sticky bg-white border-r-2 rounded-md">
      <div className="p-4 border-r border-gray-200 overflow-y-auto">
        <h2 className="font-semibold mb-4 text-lg">Filters</h2>
        <div className="mb-6">
          <h3 className="font-semibold text-md mb-2">Categories</h3>
          <div className="h-60 overflow-y-auto">
            {
              categories?.map((category: any, i) => 
                <div key={category?._id}><FormControlLabel control={<Checkbox name='category' onChange={() => handleCheckBox(category?.category_name)}/>} label={category?.category_name} /></div>
              )
            }
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-md mb-2">Price</h3>
          <Slider
            value={priceRange}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            max={1000}
            step={10}
          />
        </div>
        <div>
          <h3 className="font-semibold text-md mb-2">Rating</h3>
          {[5, 4, 3, 2, 1].map((star) => (
            <FormControlLabel
              key={star}
              control={
                <Checkbox
                  checked={rating === star}
                  onChange={() => handleRatingChange(star)}
                />
              }
              label={'★'.repeat(star) + '☆'.repeat(5 - star)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopSidebar