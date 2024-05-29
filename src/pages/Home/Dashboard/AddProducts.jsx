import React from "react";
import SectionTitles from "../../Shared/SectionTitles";
import { ImSpoonKnife } from "react-icons/im";
import axios from "axios";
import Swal from "sweetalert2";

const AddProducts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const item = form.item.value;
    const chef_name = form.chef_name.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const discount = form.discount.value;
    const image = form.image.value;
    const recifeData = {
      id,
      item,
      chef_name,
      category,
      discount,
      price,
      description,
      image,
    };
    Swal.fire({
      title: "Are you sure?",
      text:"You want to saved it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, saved it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("http://localhost:3000/menu", recifeData).then((data) => {
            console.log(data)
          if (data.status === 201) {
            Swal.fire({
              title: "saved!",
              text: "Your file has been saved.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitles
        subHeading="---refresh info---"
        heading="Add Item"
      ></SectionTitles>
      <div>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Id</span>
            </div>
            <input
              type="number"
              name="id"
              placeholder="id"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              name="item"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Chef Name*</span>
            </div>
            <input
              name="chef_name"
              type="text"
              placeholder="chef-name"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                name="category"
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Choose A Category
                </option>
                <option value="Pizza">Pizza</option>
                <option value="Beverage">Beverage</option>
                <option value="Dessert">Dessert</option>
                <option value="Main_Course">Main_Course</option>
                <option value="Appetizer">Appetizer</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                name="price"
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Discount</span>
              </div>
              <input
                name="discount"
                type="number"
                placeholder="Discount"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              name="description"
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>
          <label className="form-control w-full max-w-xs">
            <input
              className="input input-bordered w-full"
              name="image"
              type="link"
            />
            <div className="label"></div>
          </label>
          <button className="btn">
            Add Item <ImSpoonKnife />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
