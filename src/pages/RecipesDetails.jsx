import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const RecipesDetails = () => {
  const { id } = useParams();
  const [recipesDetails, setRecipesDetails] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(response => response.json())
      .then(data => setRecipesDetails(data.recipes))
  }, [id]);

  const findRecipesDetails = recipesDetails.find((e) => e.id === Number(id));

  return (
    <>
      <Navbar />
      <h1>{findRecipesDetails?.name}</h1>
    </>
  )
}

export default RecipesDetails