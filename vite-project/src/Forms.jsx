import React, {useState} from 'react';
import { Container } from '@mantine/core';
import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { Title, Button, Image} from '@mantine/core';
import axios from "axios";
import {ecobankIcon} from './assets';


const Forms = () => {

    const [assetDetails, setAssetDetails] = useState({
        location:'',
        Owner:'',
        Device:'',
        Manufacturer:'',
        Model:'',
        OSrunning:'',
        SerialNumber:'',
        TAGNumber:'',
        Comments:''
    });

    console.log(assetDetails)

     const [loading, setLoading] = useState(false)

     const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        console.log(assetDetails);
      
        try {
          const response = await axios.post(`https://assetsformsone.onrender.com/Items`, assetDetails);
          if (response.status >= 200 && response.status < 300) {
            alert("Details sent successfully");
            window.location.reload(true);
            setLoading(false);
          } else {
            console.log(`Server returned status code ${response.status}: ${response.statusText}`);
          }
        } catch (err) {
          console.log(err);
        }
      };






    return (
        <>
            <form onSubmit={handleSubmit}>

            <Container size="xs" px="xs">
                <Image width={120} height={80} mx="auto"  radius="md" src={ecobankIcon} />
                <Title order={3} mx="auto">Ecobank IT Assets Inventory</Title> 
            </Container>

            <Container size="xs" px="xs">


                {/* container for inputs */}


                <Title order={3}>Every device should be filled, independently</Title>


                <Container size="xs" px="xs" py="xs">

                    <Input.Wrapper label="location">
                        <Input component="select" rightSection={<IconChevronDown size={14} stroke={1.5} />}
                          value={assetDetails.location} onChange={(e) => setAssetDetails({...assetDetails, location:e.target.value})}
                        >
                            <option value=""></option>
                            <option value="HQ">HQ</option>
                            <option value="ACACIA">ACACIA</option>
                            <option value="PSPF">PSPF</option>
                            <option value="MWENGE">MWENGE</option>
                            <option value="MWANZA">MWANZA</option>
                            <option value="ARUSHA">ARUSHA</option>
                        </Input>
                    </Input.Wrapper>

                </Container>

                <Container size="xs" px="xs" py="xs">
                    <Input.Wrapper label="Owner">
                        <Input
                            placeholder="Owner"
                            radius="md"
                            size="md"
                            value={assetDetails.Owner} onChange={(e) => setAssetDetails({...assetDetails, Owner:e.target.value})}
                        />
                    </Input.Wrapper>
                </Container>

                
                <Container size="xs" px="xs" py="xs">
                    <Input.Wrapper label="Device">
                        <Input component="select" rightSection={<IconChevronDown size={14} stroke={1.5} />}
                            value={assetDetails.Device} onChange={(e) => setAssetDetails({...assetDetails, Device:e.target.value})}
                        >
                            <option value=""></option>
                            <option value="DESKTOP">DESKTOP</option>
                            <option value="MONITORS">MONITOR</option>
                            <option value="KEYBOARD">KEYBOARD</option>
                            <option value="LAPTOPS">LAPTOP</option>
                            <option value="DESKPHONE">DESKPHONE</option>
                            <option value="PRINTER">PRINTER</option>
                            <option value="SCANNERS">SCANNERS</option>
                            <option value="SECURITY SWITCHES">SECURITY SWITCHES</option>
                            <option value="PIN POS">PIN POS</option>
                        </Input>
                    </Input.Wrapper>
                </Container>

                <Container size="xs" px="xs" py="xs">
                    <Input.Wrapper label="Manufacturer">
                        <Input component="select" rightSection={<IconChevronDown size={14} stroke={1.5} />}
                            value={assetDetails.Manufacturer} onChange={(e) => setAssetDetails({...assetDetails, Manufacturer:e.target.value})}
                        >
                            <option value=""></option>
                            <option value="DELL">DELL</option>
                            <option value="HP">HP</option>
                            <option value="CISCO">CISCO</option>
                            <option value="EPSON">EPSON</option>
                            <option value="HIK VISION">HIK VISION</option>
                            <option value="VERIFONE">VERIFONE</option>
                            <option value="SAMSUNG">SAMSUNG</option>
                            <option value="THOMSON REUTERS">THOMSON REUTERS</option>
                        </Input>
                    </Input.Wrapper>
                </Container>

                <Container size="xs" px="xs" py="xs">
                    <Input.Wrapper label="Model">
                        <Input
                            placeholder="Model"
                            radius="md"
                            size="md"
                            value={assetDetails.Model} onChange={(e) => setAssetDetails({...assetDetails, Model:e.target.value})}
                        />
                    </Input.Wrapper>
                </Container>

                <Container size="xs" px="xs" py="xs">
                    <Input.Wrapper label="OS running">
                        <Input
                            component="select" rightSection={<IconChevronDown size={14} stroke={1.5} />}
                            value={assetDetails.OSrunning} onChange={(e) => setAssetDetails({...assetDetails, OSrunning:e.target.value})}
                        >
                            <option value=""></option>
                            <option value="None">None</option>
                            <option value="Windows 10 Enterpise">Windows 10 Enterpise</option>
                        </Input>
                    </Input.Wrapper>
                </Container>


                <Container size="xs" px="xs" py="xs">
                    <Input.Wrapper label="Serial number">
                        <Input
                            placeholder="Serial Number"
                            radius="md"
                            size="md"
                            value={assetDetails.SerialNumber} onChange={(e) => setAssetDetails({...assetDetails, SerialNumber:e.target.value})}

                        />
                    </Input.Wrapper>
                </Container>


                <Container size="xs" px="xs" py="xs">
                    <Input.Wrapper label="TAG number">
                        <Input
                            placeholder="ETZ"
                            radius="md"
                            size="md"
                            value={assetDetails.TAGNumber} onChange={(e) => setAssetDetails({...assetDetails, TAGNumber:e.target.value})}     
                        />
                    </Input.Wrapper>
                </Container>

                <Container size="xs" px="xs" py="xs">
                    <Input.Wrapper label="Comments">
                        <Input
                            placeholder="Comments"
                            radius="md"
                            size="md"
                            value={assetDetails.Comments} onChange={(e) => setAssetDetails({...assetDetails, Comments:e.target.value})}     

                        />
                    </Input.Wrapper>
                </Container>

            </Container>




            {/* container for buttons */}
            <Container size="30rem" px={0} py="lg">
                <Button color="green" radius="md" size="lg"
                onClick={handleSubmit}
                disabled={loading}
                >
                    Submit details
                </Button>
            </Container>

      </form>

        </>
    );
}

export default Forms;