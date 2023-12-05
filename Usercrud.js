import { userUrl } from "./Config";

export const addUser = async (userData) => {
    const formData = new FormData();
    formData.append('Name', userData.Name);
    formData.append('Gender', userData.Gender);
    formData.append('Age', userData.Age);
    formData.append('Image', userData.Image); // Assuming userData.Image is a File object
  
    const response = await fetch(`${userUrl}/upload`, {
      method: 'POST',
      body: formData,
    });
  
    const user = await response.json();
    console.log(user);
    return user;
  };

  const getUser = async () => {
    try {
      const response = await fetch(`${userUrl}/images`);
      const images = await response.json();
      return images;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // rethrow the error to be caught in the Home component
    }
  };
// Assuming you have a function addUser and getAllImages (as mentioned in your previous messages)

// Function to get and display all images
export const displayImages = async () => {
  try {
    const images = await getUser();

    return images.map((image) => {
      if (image && image.Image) {
        const imgElement = {
          ...image, // Include all properties of the image object
          src: `data:image/png;base64,${image.Image}`,
          alt: image.Name,
        };
        console.log(imgElement);
        return imgElement;
      } else {
        console.error('Invalid image data:', image);
        return null; // Skip this image
      }
    }).filter(Boolean); // Remove null entries
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error; // Rethrow the error to be caught in the Home component
  }
};
  
  
export const updateUser=async(userId,userData)=>{
  console.log(userData.Name)
  const formData = new FormData();
  formData.append('Name', userData.Name);
  formData.append('Gender', userData.Gender);
  formData.append('Age', userData.Age);
  formData.append('Image', userData.Image); // Assuming userData.Image is a File object

    const response = await fetch(
        `${userUrl}/edit/${userId}`,
        {
            method:'PUT',
           
            body:formData
        }
    );
    const users= await response.json();
    return users;
}


export const getStudentById = async (studentId) => {
  try {
    const response = await fetch(`${userUrl}/student/${studentId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch student details: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching student details:', error.message);
    throw new Error('Error fetching student details');
  }
};

// export const displayIdImages = async () => {
 
//     const image = await getProfile();
//     console.log(image)
// // try{
// //     return 
// //       if (image && image.Image) {
// //         const imgElement = {
// //           ...image, // Include all properties of the image object
// //           src: `data:image/png;base64,${image.Image}`,
// //           alt: image.Name,
// //         };
// //         console.log(imgElement);
// //         return imgElement;
// //       } else {
// //         console.error('Invalid image data:', image);
// //         return null; // Skip this image
// //       }
// //     // Remove null entries
// // }
// // catch (error) {
// //   console.error('Error fetching users:', error.message);
// //   throw error; // Rethrow the error to be caught in the Home component
// // }

// };


export const deleteUser = async(userId)=>{
    const response =await fetch(
        `${userUrl}/delete/${userId}`,
    {
        method:'DELETE'
            }

    );
    const user= await response.json();
    return user;
}