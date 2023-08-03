import React, { useState } from 'react';

import Button from './Button';
import Input from './Input';
import './UserForm.css';
import ViewUsers from './ViewUsers';
import ErrorModal from '../UI/ErrorModal';

const UserForm = (props) => {

    // State Management
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [street, setStreet] = useState('');
    const [suite, setSuite] = useState('');
    const [bs, setBs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        username: '',
        email: '',
        city: '',
        zipcode: '',
        phone: '',
        website: '',
        companyName: '',
    });
    const [isValid, setIsValid] = useState(false);
    const [modalError, setModalError] = useState();
    
    // Function to handle the input change and store the user input
    const handleChange = (event) => {
        const {name, value} = event.target;
        switch(name) {
            case 'name':
                setName(value);
                break;
            case 'username':
                setUsername(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'zipcode':
                setZipcode(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'website':
                setWebsite(value);
                break;
            case 'companyName':
                setCompanyName(value);
                break;
            case 'catchPhrase':
                setCatchPhrase(value);
                break;
            case 'street':
                setStreet(value);
                break;
            case 'suite':
                setSuite(value);
                break;
            case 'bs':
                setBs(value);
                break;
            case 'latitude':
                setLatitude(value);
                break;
            case 'longitude':
                setLongitude(value);
                break;
            default:
                break;
        }
    }

    // Function to validate the name field
    const handleNameValidation = (event) => {
        if (event.target.value.trim().length === 0) {
            setErrors({
                name: 'Name is required!',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        } else {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        }
    }

    // Function to validate the username field
    const handleUsernameValidation = (event) => {
        if (event.target.value.trim().length === 0) {
            setErrors({
                name: '',
                username: 'Username is required!',
                email: '',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        } else {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        }
    }

    // Function to validate the email ID
    const handleEmailValidation = (event) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (event.target.value.trim().length === 0) {
            setErrors({
                name: '',
                username: '',
                email: 'Email is required!',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        } else if (!regex.test(event.target.value)) {
            setErrors({
                name: '',
                username: '',
                email: 'Invalid Email!',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        } else {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        }
    }

    // Function to validate the city field
    const handleCityValidation = (event) => {
        if (event.target.value.trim().length === 0) {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: 'City is required!',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        } else {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        }
    }

    // Function to validate the zipcode field
    const handleZipcodeValidation = (event) => {
        if (event.target.value.trim().length === 0) {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: 'Zipcode is required!',
                phone: '',
                website: '',
                companyName: '',
            })
        } else {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        }
    }

    // Function to validate the phone field
    const handlePhoneValidation = (event) => {
        const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        if (event.target.value.trim().length === 0) {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: 'Phone is required!',
                website: '',
                companyName: '',
            })
        } else if (!regex.test(event.target.value)) {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: 'Invalid phone number!',
                website: '',
                companyName: '',
            })
        } else {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        }
    }

    // Function to validate the website field
    const handleWebsiteValidation = (event) => {
        if (event.target.value.trim().length === 0) {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: '',
                website: 'Website is required!',
                companyName: '',
        })} else {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        }
    }

    // Function to validate the company name field
    const handleCompanyNameValidation = (event) => {
        if (event.target.value.trim().length === 0) {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: 'Company Name is required!',
            })
        } else {
            setErrors({
                name: '',
                username: '',
                email: '',
                city: '',
                zipcode: '',
                phone: '',
                website: '',
                companyName: '',
            })
        }
    }

    // Function to handle the data submission
    const handleSubmit = (event) => {
        event.preventDefault()
        
        // If any of the fields is not empty, then submit the data
        if (name !== '' && username !== '' && email !== '' && zipcode !== '' && phone !== '' && city !== '' && companyName !== '' && website !== '') {
            
            // Get the array of objects from local storage
            let usersData = localStorage.getItem("usersData");
            usersData = JSON.parse(usersData);
            usersData.push(
                {
                    name,
                    username,
                    email,
                    address: {
                        street,
                        suite,
                        city,
                        zipcode,
                        geo: {
                            lat: latitude,
                            lng: longitude
                        }
                    },
                    phone,
                    website,
                    company: {
                        name: companyName,
                        catchPhrase,
                        bs
                    }
                }
            )

            // Save the updated array in the localstorage
            localStorage.setItem("usersData", JSON.stringify(usersData));
            
            setIsValid(true);
        } else if (name.trim().length === 0) {
            setModalError({
                title: 'Invalid Input!',
                message: 'Please enter a valid name (non-empty values)!'
            })
        }
        else if (username.trim().length === 0) {
            setModalError({
                title: 'Invalid Input!',
                message: 'Please enter a valid username (non-empty values)!'
            })
        }
        else if (email.trim().length === 0) {
            setModalError({
                title: 'Invalid Input!',
                message: 'Please enter a valid email (non-empty values)!'
            })
        }
        else if (city.trim().length === 0) {
            setModalError({
                title: 'Invalid Input!',
                message: 'Please enter a valid city (non-empty values)!'
            })
        }
        else if (zipcode.trim().length === 0) {
            setModalError({
                title: 'Invalid Input!',
                message: 'Please enter a valid zipcode (non-empty values)!'
            })
        }
        else if (phone.trim().length === 0) {
            setModalError({
                title: 'Invalid Input!',
                message: 'Please enter a valid phone (non-empty values)!'
            })
        }
        else if (website.trim().length === 0) {
            setModalError({
                title: 'Invalid Input!',
                message: 'Please enter a valid website (non-empty values)!'
            })
        }
        else if (companyName.trim().length === 0) {
            setModalError({
                title: 'Invalid Input!',
                message: 'Please enter a valid company name (non-empty values)!'
            })
        }
        
    }

    const errorHandler = () => {
        setModalError(null);
    }

    const cancelBtnHandler = () => {
        setIsValid(true);
    }

    return (
        <div>
        {
            isValid === false ?
            <div className='UserFormDiv'>
                {modalError && <ErrorModal title={modalError.title} message={modalError.message} onConfirm={errorHandler} />}
                <form onSubmit={handleSubmit} className="UserForm">
                    <h2>Add a User</h2>
                    <div className='UserForm__name'>
                        <div className='labelDiv'><label className='UserForm__name_label'>Name</label><br /></div>
                        <Input
                            type="text"
                            placeholder="Enter a name"
                            name='name'
                            value={name}
                            onChange={(e) => {
                                handleChange(e);
                                handleNameValidation(e);
                            }}
                            className={errors.name !== '' ? 'fullInput inputError' : 'fullInput'}
                        /><br />
                        <div className='errorDiv'><span className="error">{errors.name}</span></div><br />
                    </div>

                    <div className='UserForm__username'>
                        <div className='labelDiv'><label className='UserForm__username_label'>Username</label></div><br />
                        <Input
                            type="text"
                            placeholder="Enter a username"
                            name='username'
                            value={username}
                            onChange={(e) => {
                                handleChange(e);
                                handleUsernameValidation(e);
                            }}
                            className={errors.username !== '' ? 'fullInput inputError' : 'fullInput'}
                        /><br />
                        <div className='errorDiv'><span className="error">{errors.username}</span></div><br />
                    </div>
                    
                    <div className='UserForm__email'>
                        <div className='labelDiv'><label className='UserForm__email_label'>Email</label></div><br />
                        <Input
                            type="email"
                            placeholder="Enter a email"
                            name='email'
                            value={email}
                            onChange={(e) => {
                                handleChange(e);
                                handleEmailValidation(e);
                            }}
                            className={errors.email !== '' ? 'fullInput inputError' : 'fullInput'}
                        /><br />
                        <div className='errorDiv'><span className="error">{errors.email}</span></div><br />
                    </div>
                    
                    <div className='labelDiv'><label className='UserForm__address_label'>Address</label></div><br />
                    <div className='UserForm__address'>
                        <div className='UserForm__address_street'>
                            <Input
                                type="text"
                                placeholder="Street"
                                name='street'
                                value={street}
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                className='halfInput'
                            />
                        </div>
                        <div className='UserForm__address_suite'>
                            <Input
                                type="text"
                                placeholder="Suite" 
                                name='suite'
                                value={suite}
                                onChange={(e) => {
                                    handleChange(e)
                                }}
                                className='halfInput'
                            />
                        </div>
                    </div>
                    <div className='UserForm__address_city'>
                        <div>
                            <Input
                                type="text"
                                placeholder="City"
                                name='city'
                                value={city}
                                onChange={(e) => {
                                    handleChange(e);
                                    handleCityValidation(e);
                                }}
                                className={errors.city !== '' ? 'fullInput inputError' : 'fullInput'}
                            /><br />
                            <div className='errorDiv'><span className='error'>{errors.city}</span></div>
                        </div>
                        <div className='UserForm__address_zipcode'>
                            <Input
                                type="text"
                                placeholder="Zipcode"
                                name='zipcode'
                                value={zipcode}
                                onChange={(e) => {
                                    handleChange(e);
                                    handleZipcodeValidation(e);
                                }}
                                className={errors.zipcode !== '' ? 'fullInput inputError' : 'fullInput'}
                            /><br />
                            <div className='errorDiv'><span className='error'>{errors.zipcode}</span></div>
                        </div>
                    </div>
                    <div className='UserForm__address_latlong'>
                        <Input
                            type="text"
                            placeholder="Latitude" 
                            name='latitude'
                            value={latitude}
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            className='halfInput'
                        />
                        <Input
                            type="text"
                            placeholder="Longitude"
                            name='longitude'
                            value={longitude}
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            className='halfInput'
                        />
                    </div><br />

                    <div className='UserForm__phone'>
                        <div className='labelDiv'><label className='UserForm__phone_label'>Phone</label></div><br />
                        <Input
                            type="tel"
                            placeholder="Enter a phone number"
                            name='phone'
                            value={phone}
                            onChange={(e) => {
                                handleChange(e);
                                handlePhoneValidation(e);
                            }}
                            className={errors.phone !== '' ? 'fullInput inputError' : 'fullInput'}
                        /><br />
                        <div className='errorDiv'><span className='error'>{errors.phone}</span></div><br />
                    </div>

                    <div className='UserForm__website'>
                        <div className='labelDiv'><label className='UserForm__website_label'>Website</label></div><br />
                        <Input
                            type="url"
                            placeholder="Enter a website link"
                            name='website'
                            value={website}
                            onChange={(e) => {
                                handleChange(e);
                                handleWebsiteValidation(e);
                            }}
                            className={errors.website !== '' ? 'fullInput inputError' : 'fullInput'}
                        /><br />
                        <div className='errorDiv'><span className='error'>{errors.website}</span></div><br />
                    </div>
                    
                    <div className='labelDiv'><label className='UserForm__company_label'>Company</label></div><br />
                    <div className='UserForm__company'>
                        <Input
                            type="text"
                            placeholder="Enter company name"
                            name='companyName'
                            value={companyName}
                            onChange={(e) => {
                                handleChange(e);
                                handleCompanyNameValidation(e)
                            }}
                            className={errors.companyName !== '' ? 'fullInput inputError' : 'fullInput'}
                        /><br />
                        <div className='errorDiv'><span className='error'>{errors.companyName}</span></div>
                    </div>
                    <div className='UserForm__catchphrase_bs'>
                        <div className='UserForm__catchphrase'>
                            <Input
                                type="text"
                                placeholder="Enter a catch phrase"
                                name='catchPhrase'
                                value={catchPhrase}
                                onChange={(e) => {
                                    handleChange(e)
                                }}
                                className='halfInput'
                            />
                            {/* <span className='error'>{errorCatchPhrase}</span> */}
                        </div>
                        <div className='UserForm__bs'>
                            <Input
                                type="text"
                                placeholder="Enter a BS"
                                name='bs'
                                value={bs}
                                onChange={(e) => {
                                    handleChange(e)
                                }}
                                className='halfInput'
                            />
                        </div>
                    </div><br />
                    <Button className='fullButton'>Submit</Button>
                    <Button className='fullButton cancelBtn' onClick={cancelBtnHandler}>Cancel</Button>
                </form>
            </div> : <ViewUsers />
        }</div>
        
    )
}

export default UserForm;