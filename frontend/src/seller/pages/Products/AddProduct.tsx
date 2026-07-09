import React, {useEffect, useState} from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Grid,
  CircularProgress,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material"
//import "tailwindcss/tailwind.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import {mainCategory} from "../../../data/category/mainCategory"
import { uploadToCloudinary } from "../../../Util/uploadToCloudinary"; 
import { isTemplateMiddle } from "typescript";
import { accessoriesLevelTwo } from "../../../data/category/levelTwo/accessoriesLevelTwo";
import { caseLevelTwo } from "../../../data/category/levelTwo/caseLevelTwo";
import { coreLevelTwo } from "../../../data/category/levelTwo/coreLevelTwo";
import { laptopLevelTwo } from "../../../data/category/levelTwo/laptopLevelTwo";
import { monitorLevelTwo } from "../../../data/category/levelTwo/monitorLevelTwo";
import { routersLevelTwo } from "../../../data/category/levelTwo/routersLevelTwo";
import { softwareLevelTwo } from "../../../data/category/levelTwo/softwareLevelTwo";

import { accessoriesLevelThree } from "../../../data/category/levelThree/accessoriesLevelThree";
import { caseLevelThree } from "../../../data/category/levelThree/caseLevelThree";
import { coreLevelThree } from "../../../data/category/levelThree/coreLevelThree";
import { laptopLevelThree } from "../../../data/category/levelThree/laptopLevelThree";
import { monitorLevelThree } from "../../../data/category/levelThree/monitorLevelThree";
import { routersLevelThree } from "../../../data/category/levelThree/routersLevelThree";
import { softwareLevelThree } from "../../../data/category/levelThree/softwareLevelThree";
import { title } from "process";
import { useAppDispatch } from "../../../State/Store";
import { createProduct } from "../../../State/seller/sellerProductSlice";

// Kieu du lieu cho 1 item trong levelTwo, vi du: { id: 1, name: "By Brand" }
interface LevelTwoItem {
  id: number;
  name: string;
}

const categoryTwo: Record<string, LevelTwoItem[]> = {
  Laptop:      laptopLevelTwo,
  Core:        coreLevelTwo,
  Case:        caseLevelTwo,
  Monitor:     monitorLevelTwo,
  Accessories: accessoriesLevelTwo,
  Routers:     routersLevelTwo,
  Software:    softwareLevelTwo,
};

// levelThree thuc te la Record<TenLevelTwo, string[]>
// vi du laptopLevelThree["By Brand"] = ["Dell", "HP", "Asus", ...]
const categoryThree: Record<string, Record<string, string[]>> = {
  Laptop:      laptopLevelThree,
  Core:        coreLevelThree,
  Case:        caseLevelThree,
  Monitor:     monitorLevelThree,
  Accessories: accessoriesLevelThree,
  Routers:     routersLevelThree,
  Software:    softwareLevelThree,
};

// Kieu du lieu cho 1 cap thuoc tinh ky thuat (thay cho "sizes" kieu quan ao)
interface AttributeItem {
  key: string;
  value: string;
}

// Bang mau san pham tu dinh nghia (KHONG dung "colors" cua @mui/material,
// vi do la bang mau noi bo cua MUI - khong co dang {name, hex} nhu can dung o day)
const productColors = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Gray", hex: "#808080" },
  { name: "Blue", hex: "#1E90FF" },
  { name: "Red", hex: "#E53935" },
  { name: "Gold", hex: "#D4AF37" },
];

const AddProduct = () => {
  const [uploadImage, setUploadingImage] = useState(false);
  const [snackbarOpen, setOpenSnackbar] = useState(false);
  const dispatch=useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      orgPrice: "",
      sellingPrice: "",
      quantity: "",
      color: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      // Thay "sizes" (FREE/S/M/L/XL) bang danh sach thuoc tinh tu do
      // Vi du: RAM: 16GB, CPU: i7-13700H, Kich thuoc man hinh: 15.6 inch
      attributes: [{ key: "", value: "" }] as AttributeItem[],
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(createProduct({request:values, jwt:localStorage.getItem("jwt")}))
    },
  });
  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploadingImage(true);
    const image = await uploadToCloudinary(file);
    if (image) {
      formik.setFieldValue("images", [...formik.values.images, image]);
    }
    setUploadingImage(false);
  };
// splice 1 phuong thuc co san cua doi tuong Array, dung de them, xoa hoac thay the cac phan tu trong 1 mang
// TH nay la cat bo cac phan tu khoi mang, xoa anh neu nhu khong muon dung nua trong Form addproduct
  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  // Xu ly danh sach thuoc tinh ky thuat (key-value) 
  const handleAttributeChange = (
    index: number,
    field: "key" | "value",
    newValue: string
  ) => {
    const updated = [...formik.values.attributes];
    updated[index] = { ...updated[index], [field]: newValue };
    formik.setFieldValue("attributes", updated);
  };

  const handleAddAttribute = () => {
    formik.setFieldValue("attributes", [
      ...formik.values.attributes,
      { key: "", value: "" },
    ]);
  };

  const handleRemoveAttribute = (index: number) => {
    const updated = [...formik.values.attributes];
    updated.splice(index, 1);
    // Luon giu lai it nhat 1 dong trong nhap de seller khong bi mat UI nhap lieu
    formik.setFieldValue(
      "attributes",
      updated.length ? updated : [{ key: "", value: "" }]
    );
  };

  //Khi doi Category cap 1 -> reset cap 2 va cap 3 de tranh du lieu "mo coi" 
  const handleCategoryChange = (e: any) => {
    formik.setFieldValue("category", e.target.value);
    formik.setFieldValue("category2", "");
    formik.setFieldValue("category3", "");
  };

  //Khi doi Category cap 2 -> reset cap 3
  const handleCategory2Change = (e: any) => {
    formik.setFieldValue("category2", e.target.value);
    formik.setFieldValue("category3", "");
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  }



  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
        <Grid container spacing={2}>
          <Grid className="flex flex-wrap gap-5 size={{xs:12}}">
            <input
            type="file"
            accept="image/*"
            id="fileInput"
            style={{ display: "none"}}
            onChange={handleImageChange}
            />

            <label className="relative" htmlFor="fileInput">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-between p-3 border rounded-md border-gray-400">
                <AddPhotoAlternateIcon className="text-gray-700" />
              </span>
              {uploadImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                  <CircularProgress />
                </div>
              )}
            </label>

            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image, index) => (
                <div className="relative">
                  <img 
                    className="w-24 h-24 object-cover"
                    key={index}
                    src={image}
                    alt={`ProductImage ${index + 1}`}
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    className=""
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      outline: "none",
                    }}
                  >

                    <CloseIcon sx={{ fontSize: "1rem"}} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>
          <Grid size={{xs:12}}>
            <TextField 
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            required
            />
          </Grid>
          <Grid size={{xs:12}}>
            <TextField 
            multiline
            rows={4}
            fullWidth
            id="description"
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
            required
            />
          </Grid>
          <Grid size={{xs:12, md:4, lg:3}}>
            <TextField 
            fullWidth
            id="org_price"
            name="orgPrice"
            label="Original Price"
            type="number"
            value={formik.values.orgPrice}
            onChange={formik.handleChange}
            error={formik.touched.orgPrice && Boolean(formik.errors.orgPrice)}
            helperText={formik.touched.orgPrice && formik.errors.orgPrice}
            required
            />
          </Grid>
          <Grid size={{xs:12, md:4, lg:3}}>
            <TextField 
            fullWidth
            id="sellingPrice"
            name="sellingPrice"
            label="Selling Price(Discount)"
            type="number"
            value={formik.values.sellingPrice}
            onChange={formik.handleChange}
            error={
              formik.touched.sellingPrice &&
              Boolean(formik.errors.sellingPrice)
            }
            helperText={
              formik.touched.sellingPrice && formik.errors.sellingPrice
            }
            required
            />
          </Grid>

          <Grid size={{xs:12, md:4, lg:3}}>
            <FormControl
            fullWidth
            error={formik.touched.color && Boolean(formik.errors.color)}
            required
            >
              <InputLabel id="color-label" >Color</InputLabel>
              <Select
              labelId="color-label"
              id="color"
              name="color"
              value={formik.values.color}
              onChange={formik.handleChange}
              label="Color"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {productColors.map((color, index) => <MenuItem key={index} value={color.name}>
                  <div className="flex gap-3">
                    <span style={{ backgroundColor: color.hex}} className={`h-5 w-5 
                    rounded-full ${color.name === "White" ? "border" : ""}`}> </span>
                    <p>{color.name}</p>
                  </div>
                </MenuItem>)}
              </Select>
              {formik.touched.color && formik.errors.color && (
                <FormHelperText>{formik.errors.color}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Thong so ky thuat (thay cho "Sizes" kieu quan ao FREE/S/M/L/XL) */}
          {/* Seller tu them cap "Ten thuoc tinh" - "Gia tri", dung chung cho ca 7 category */}
          <Grid size={{xs:12}}>
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Thông số kỹ thuật
              <span className="text-gray-400 font-normal">
                {" "}(VD: RAM: 16GB, CPU: i7-13700H, Kích thước màn hình: 15.6 inch)
              </span>
            </p>

            <div className="flex flex-col gap-3">
              {formik.values.attributes.map((attr, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <TextField
                    fullWidth
                    size="small"
                    label="Tên thuộc tính"
                    placeholder="VD: RAM"
                    value={attr.key}
                    onChange={(e) =>
                      handleAttributeChange(index, "key", e.target.value)
                    }
                  />
                  <TextField
                    fullWidth
                    size="small"
                    label="Giá trị"
                    placeholder="VD: 16GB"
                    value={attr.value}
                    onChange={(e) =>
                      handleAttributeChange(index, "value", e.target.value)
                    }
                  />
                  <IconButton
                    onClick={() => handleRemoveAttribute(index)}
                    size="small"
                    color="error"
                    sx={{ outline: "none" }}
                  >
                    <CloseIcon sx={{ fontSize: "1.1rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>

            <Button
              onClick={handleAddAttribute}
              startIcon={<AddIcon />}
              size="small"
              sx={{ mt: 1.5 }}
            >
              Thêm thuộc tính
            </Button>
          </Grid>

          {/* ── Category cap 1 ── */}
          <Grid size={{xs:12}}>
            <FormControl
            fullWidth
            error={formik.touched.category && Boolean(formik.errors.category)}
            required
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Select
              labelId="category-label"
              id="category"
              name="category"
              value={formik.values.category}
              onChange={handleCategoryChange}
              label="Category"
              >
                {/* <MenuItem value=""><em>None</em></MenuItem> */}
                {mainCategory.map((item) => (
                  <MenuItem key={item.categoryId} value={item.categoryId}>{item.name}</MenuItem>
                ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/*Category cap 2 
              Gia tri (value) dung "item.name" vi day chinh la KEY de tra cuu
              sang categoryThree (vd: "By Brand", "Gaming Laptops"...) */}
          <Grid size={{xs:12}}>
            <FormControl
            fullWidth
            error={formik.touched.category2 && Boolean(formik.errors.category2)}
            required
            disabled={!formik.values.category}
            >
              <InputLabel id="category2-label">Second Category</InputLabel>
              <Select
              labelId="category2-label"
              id="category2"
              name="category2"
              value={formik.values.category2}
              onChange={handleCategory2Change}
              label="Second Category"
              >
                {formik.values.category &&
                   categoryTwo[formik.values.category]?.map((item) => (
                    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                   ))}
              </Select>
              {formik.touched.category2 && formik.errors.category2 && (
                <FormHelperText>{formik.errors.category2}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Category cap 3 
              categoryThree[category] tra ve mot Record<string, string[]>
              -> chi can lay tiep theo key category2 la duoc mang string[] de hien thi,
              KHONG can ham childCategory/parentCategoryId nua vi data khong co cac field do */}
          <Grid size={{xs:12}}>
            <FormControl
            fullWidth
            error={formik.touched.category3 && Boolean(formik.errors.category3)}
            disabled={!formik.values.category2}
            >
              <InputLabel id="category3-label">Third Category</InputLabel>
              <Select
              labelId="category3-label"
              id="category3"
              name="category3"
              value={formik.values.category3}
              onChange={formik.handleChange}
              label="Third Category"
              >
                <MenuItem value="">
                   <em>None</em>
                </MenuItem>
                {formik.values.category2 &&
                  categoryThree[formik.values.category]?.[formik.values.category2]?.map(
                    (item: string, idx: number) => (
                      <MenuItem key={idx} value={item}>{item}</MenuItem>
                    )
                  )}
              </Select>
              {formik.touched.category3 && formik.errors.category3 && (
                <FormHelperText>{formik.errors.category3}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{xs:12}}>
            <Button
              sx={{ p: "14px" }}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              // disabled={sellerProduct.loading}
            >
              {false ? <CircularProgress size="small"
                sx={{ width: "27px", height: "27px"}}/> : "Add Product"}
            </Button>
          </Grid>
        </Grid>
      </form>
        {/* <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right"}}
        open={snackbarOpen} autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        >
          <Alert
          onClose={handleCloseSnackbar}
          severity={true ? "error" : "success"}
          variant="filled"
          sx={{ width: '100%'}}
          >
            {sellerProduct.error ? sellerProduct.error : "Product created succeesfully"}
          </Alert>
        </Snackbar> */}
    </div>
  )
}
export default AddProduct