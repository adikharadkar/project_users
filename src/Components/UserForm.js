import React, { useState } from 'react';

import Button from './Button';
import Input from './Input';

const UserForm = (props) => {

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

    const handleSubmit = (event) => {
        event.preventDefault()
        if (name !== '' || username !== '' || email !== '' || zipcode !== '' || phone !== '' || city !== '' || companyName !== '' || website !== '') {
            console.log({
                name,
                username,
                email,
                street,
                suite,
                city,
                zipcode,
                phone,
                companyName,
                website,
                bs,
                catchPhrase
            })
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <Input
                        type="text"
                        placeholder="Enter a name"
                        name='name'
                        value={name}
                        onChange={(e) => {
                            handleChange(e);
                            handleNameValidation(e);
                        }}
                    />
                    <span className="error">{errors.name}</span>
                </div>

                <div>
                    <label>Username</label>
                    <Input
                        type="text"
                        placeholder="Enter a username"
                        name='username'
                        value={username}
                        onChange={(e) => {
                            handleChange(e);
                            handleUsernameValidation(e);
                        }}
                    />
                    <span className="error">{errors.username}</span>
                </div>
                
                <div>
                    <label>Email</label>
                    <Input
                        type="email"
                        placeholder="Enter a email"
                        name='email'
                        value={email}
                        onChange={(e) => {
                            handleChange(e);
                            handleEmailValidation(e);
                        }}
                    />
                    <span className="error">{errors.email}</span>
                </div>
                
                <label>Address</label>
                <div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Street"
                            name='street'
                            value={street}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Suite" 
                            name='suite'
                            value={suite}
                            onChange={(e) => {
                                handleChange(e)
                            }}
                        />
                    </div>
                </div>
                <div>
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
                        />
                        <span className='error'>{errors.city}</span>
                    </div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Zipcode"
                            name='zipcode'
                            value={zipcode}
                            onChange={(e) => {
                                handleChange(e);
                                handleZipcodeValidation(e);
                            }}
                        />
                        <span className='error'>{errors.zipcode}</span>
                    </div>
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Latitude" 
                        name='latitude'
                        value={latitude}
                        onChange={(e) => {
                            handleChange(e)
                        }}
                    />
                    <Input
                        type="text"
                        placeholder="Longitude"
                        name='longitude'
                        value={longitude}
                        onChange={(e) => {
                            handleChange(e)
                        }}
                    />
                </div>

                <div>
                    <label>Phone</label>
                    <Input
                        type="tel"
                        placeholder="Enter a phone number"
                        name='phone'
                        value={phone}
                        onChange={(e) => {
                            handleChange(e);
                            handlePhoneValidation(e);
                        }}
                    />
                    <span className='error'>{errors.phone}</span>
                </div>

                <div>
                    <label>Website</label>
                    <Input
                        type="url"
                        placeholder="Enter a website link"
                        name='website'
                        value={website}
                        onChange={(e) => {
                            handleChange(e);
                            handleWebsiteValidation(e);
                        }}
                    />
                    <span className='error'>{errors.website}</span>
                </div>
                
                <label>Company</label>
                <div>
                    <Input
                        type="text"
                        placeholder="Enter company name"
                        name='companyName'
                        value={companyName}
                        onChange={(e) => {
                            handleChange(e);
                            handleCompanyNameValidation(e)
                        }}
                    />
                    <span className='error'>{errors.companyName}</span>
                </div>
                <div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Enter a catch phrase"
                            name='catchPhrase'
                            value={catchPhrase}
                            onChange={(e) => {
                                handleChange(e)
                            }}
                        />
                        {/* <span className='error'>{errorCatchPhrase}</span> */}
                    </div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Enter a BS"
                            name='bs'
                            value={bs}
                            onChange={(e) => {
                                handleChange(e)
                            }}
                        />
                    </div>
                </div>
                <Button>Submit</Button>
            </form>
        </div>
    )
}

export default UserForm;