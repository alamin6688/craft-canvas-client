import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraftItem = () => {
  const craft = useLoaderData();
  const {
    _id,
  } = craft;
  console.log(craft)

  const handleUpdateCraftItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value.toLowerCase();
    const subCategoryName = form.subCategoryName.value.toLowerCase();
    const rating = form.rating.value.toLowerCase();
    const description = form.description.value;
    const price = form.price.value;
    const customization = form.customization.value.toLowerCase();
    const processingTime = form.processingTime.value.toLowerCase();
    const stocStatus = form.stocStatus.value;
    const name = form.name.value.toLowerCase();
    const email = form.email.value;
    const image = form.image.value;

    const newCraftInfo = {
      itemName,
      subCategoryName,
      rating,
      description,
      price,
      customization,
      processingTime,
      stocStatus,
      name,
      email,
      image,
    };

    fetch(`http://localhost:5000/crafts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraftInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Craft Item Updated Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="bg-orange-500 bg-opacity-40 p-24 rounded-xl my-10">
      <h2 className="text-3xl font-extrabold text-center mb-5">
        Update Craft Item
      </h2>
      <form onSubmit={handleUpdateCraftItem}>
       {/* 1st row */}
       <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label>Item Name</label>
            <input
              type="text"
              name="itemName"
              placeholder="Item Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label>Sub Category Name</label>
            <input
              type="text"
              name="subCategoryName"
              placeholder="Sub Category Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label>Rating</label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label>Short Description</label>
            <input
              type="text"
              name="description"
              placeholder="Short Description"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* 3rd row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label>Price </label>
            <input
              type="number"
              name="price"
              placeholder="Price in $"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label>Customization</label>
            <br />
            <select
              name="customization"
              className="w-full rounded-lg px-5 py-[13px] outline-none"
            >
              <option>Select Customization</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        {/* 4th row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label>Processing Time</label>
            <br />
            <select
              name="processingTime"
              className="w-full rounded-lg px-5 py-[13px] outline-none"
            >
              <option>Select Processing Time</option>
              <option value="1 day">1 Day</option>
              <option value="2 days">2 Days</option>
              <option value="3 days">3 Days</option>
              <option value="4 days">4 Days</option>
              <option value="5 days">5 Days</option>
              <option value="6 days">6 Days</option>
              <option value="7 days">7 Days</option>
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label>Stock Status</label>
            <br />
            <select
              name="stocStatus"
              className="w-full rounded-lg px-5 py-[13px] outline-none"
            >
              <option>Select Stock Status</option>
              <option value="In Stock">In Stock</option>
              <option value="Made To Order">Made To Order</option>
            </select>
          </div>
        </div>
        {/* 5th row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label>User Name</label>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label>User Email</label>
            <input
              type="email"
              name="email"
              placeholder="User Email"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* 5th row */}
        <div className="mb-8">
          <div className="w-full">
            <label>Image URl</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL Here.."
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* submit here */}
        <input type="submit" value="Add Item" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateCraftItem;
