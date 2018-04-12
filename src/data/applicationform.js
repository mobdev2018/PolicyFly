export const ApplicationFormList = [
  {
    title: 'Basic Information',
    alias: 'Basic Info',
    name: 'basic-info',
    valid: false,
    content: [
      {
        title: 'Primary Named Insured',
        name: 'Primary Named Insured',
        valid: false,
        content: [
          {
            type: 'text',
            name: 'primaryName',
            description: '',
            width: '100',
            placeholder: 'Name',
            value: ''
          }
        ]
      },
      {
        title: 'Mailing Address at ',
        name: 'Address',
        valid: false,
        content: [
          {
            type: 'text',
            name: 'address',
            description: '',
            width: '100',
            placeholder: 'Address',
            value: ''
          },
          {
            type: 'text',
            name: 'address2',
            description: '',
            width: '100',
            placeholder: 'Suite, Floor, Etc.',
            value: ''
          }
        ]
      },
      {
        title: 'Preferred Contact at ',
        name: 'Contact Person',
        valid: false,
        content: [
          {
            type: 'text',
            name: 'contactName',
            description: '',
            width: '100',
            placeholder: 'Contact Name',
            value: ''
          },
          {
            type: 'text',
            name: 'contactTitle',
            description: '',
            width: '50',
            placeholder: 'Contact Title',
            value: ''
          },
          {
            type: 'text',
            name: 'contactPhone',
            description: '',
            width: '50',
            placeholder: 'Contact Phone Number',
            value: ''
          }
        ]
      },
      {
        title: 'Additional Named Insured',
        name: 'Additional Named Insured',
        valid: false,
        content: [
          {
            type: 'text',
            name: 'namedInsured',
            description: '',
            width: '100',
            placeholder: 'Named Insured',
            value: []
          },
          {
            type: 'button',
            name: 'submitBtn',
            width: '100',
            position: 'right',
            title: 'ADD'
          }
        ]
      },
      {
        title: 'Description of Operations',
        name: 'Description of Operations',
        valid: false,
        content: [
          {
            type: 'textarea',
            name: 'operationDesc',
            description: '',
            width: '100',
            placeholder: 'Type here...',
            value: ''
          }
        ]
      },
      {
        title: 'Company Website URL',
        name: 'Website',
        valid: false,
        content: [
          {
            type: 'text',
            name: 'website',
            description: '',
            width: '100',
            placeholder: 'Website URL',
            value: ''
          }
        ]
      },
      {
        title: 'Limits Requested',
        name: 'Limits Requested',
        valid: false,
        content: [
          {
            type: 'checkbox-group',
            name: 'limits',
            description: '',
            width: '100',
            elements: [
              {
                key: '10m',
                title: '$10M',
                value: false
              },
              {
                key: '25m',
                title: '$25M',
                value: false
              },
              {
                key: '50m',
                title: '$50M',
                value: false
              },
              {
                key: '75m',
                title: '$75M',
                value: false
              },
              {
                key: '100m',
                title: '$100M',
                value: false
              }
            ]
          }
        ]
      },
      {
        title: 'Effective Date',
        name: 'Effective Date',
        valid: false,
        content: [
          {
            type: 'datepicker',
            name: 'effectiveDate',
            description: '',
            width: '50',
            placeholder: 'Select Date',
            value: null
          }
        ]
      }
    ]
  },
  {
    title: 'Policy Details',
    alias: 'Policy Details',
    name: 'policy-details',
    valid: false,
    content: [
      {
        title: 'Underlying General Liability',
        name: 'Underlying General Liability',
        valid: false,
        description: 'Required minimum limits include: $2,000,000 General Aggregate, $1,000,000. Per Occurrence, $1,000,000 Personal & Advert and $1,000,000 Per Occurrence.',
        values: [],
        content: [
          {
            type: 'radio-group',
            name: 'perLocationAggregate',
            description: 'Per Location Aggregate?',
            width: '50',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'hostLiquorIncluded',
            description: 'Host Liquor Included?',
            width: '50',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'text',
            name: 'limitsProvided',
            description: '',
            width: '100',
            placeholder: 'Limits Provided',
            inputtype: 'number',
            value: ''
          },
          {
            type: 'text',
            name: 'namedInsured',
            description: '',
            width: '50',
            placeholder: 'Named Insured',
            value: ''
          },
          {
            type: 'text',
            name: 'carrier',
            description: '',
            width: '50',
            placeholder: 'Carrier',
            value: ''
          },
          {
            type: 'text',
            name: 'annualPremium',
            description: '',
            width: '33.33',
            placeholder: 'Annual Premium',
            inputtype: 'number',
            value: ''
          },
          {
            type: 'datepicker',
            name: 'startDate',
            description: '',
            width: '33.33',
            placeholder: 'Start Date',
            value: null
          },
          {
            type: 'datepicker',
            name: 'endDate',
            description: '',
            width: '33.33',
            placeholder: 'End Date',
            value: null
          },
          {
            type: 'button',
            name: 'submitBtn',
            width: '100',
            position: 'right',
            title: 'ADD'
          }
        ]
      },
      {
        title: 'Other Underlying Coverages',
        name: 'Other Underlying Coverages',
        valid: false,
        values: [],
        content: [
          {
            type: 'dropdown',
            description: 'Add a coverage type to provide details about the underlying coverage you currently have.',
            name: 'addCoverageTypeDropdown',
            title: 'ADD COVERAGE TYPE',
            width: '100',
            subtitles: [
              'Employee Benefits Liability',
              'Auto Liability',
              'Employers Liability',
              'Liquor Liability',
              'HNO Liability',
              'Foreign Liability(Incidental, Auto & WC)',
              'Other Liability'
            ]
          }
        ]
      },
      {
        title: 'Expiring Umbrella',
        name: 'Expiring Umbrella',
        valid: false,
        values: [],
        content: [
          {
            type: 'text',
            name: 'carrier',
            description: '',
            width: '30',
            placeholder: 'Carrier',
            value: ''
          },
          {
            type: 'text',
            name: 'limitsProvided',
            inputtype: 'number',
            description: '',
            width: '34',
            placeholder: 'Limits Provided',
            value: ''
          },
          {
            type: 'text',
            name: 'annualPremium',
            inputtype: 'number',
            description: '',
            width: '36',
            placeholder: 'Annual Premium',
            value: ''
          },
          {
            type: 'button',
            width: '100',
            name: 'submitBtn',
            position: 'right',
            title: 'ADD'
          }
        ]
      },
      {
        title: 'Total Ratable Exposures',
        name: 'Total Ratable Exposures',
        valid: false,
        content: [
          {
            type: 'text',
            name: 'grossReceipts',
            inputtype: 'number',
            description: '',
            width: '100',
            placeholder: 'Gross Receipts',
            value: ''
          },
          {
            type: 'radio-group',
            name: 'lessorsRiskExposures',
            description: 'Lessors Risk Exposures?',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ],
            content: [
              {
                type: 'text',
                name: 'occupant',
                description: '',
                width: '66.66',
                placeholder: 'Occupant',
                value: ''
              },
              {
                type: 'text',
                name: 'sqft',
                inputtype: 'number',
                description: '',
                width: '33.33',
                placeholder: 'Sq. Ft.',
                value: ''
              },
              {
                type: 'button',
                width: '100',
                name: 'submitBtn',
                position: 'right',
                title: 'ADD'
              }
            ],
            exposures: []
          },
          {
            type: 'radio-group',
            name: 'autoExposure',
            description: 'Auto Exposure?',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ],
            content: [
              {
                type: 'text',
                name: 'privatePassenger',
                inputtype: 'number',
                description: '',
                width: '50',
                placeholder: 'Private Passenger',
                value: ''
              },
              {
                type: 'text',
                name: 'light',
                inputtype: 'number',
                description: '',
                width: '50',
                placeholder: 'Light',
                value: ''
              },
              {
                type: 'text',
                name: 'medium',
                inputtype: 'number',
                description: '',
                width: '50',
                placeholder: 'Medium',
                value: ''
              },
              {
                type: 'text',
                name: 'heavyOrExtraHeavy',
                inputtype: 'number',
                description: '',
                width: '50',
                placeholder: 'Heavy/Extra Heavy',
                value: ''
              },
              {
                type: 'text',
                name: 'trailers',
                inputtype: 'number',
                description: '',
                width: '50',
                placeholder: 'Trailers',
                value: ''
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Locations',
    alias: 'Locations',
    name: 'locations',
    valid: false,
    content: [
      {
        title: 'Number of Locations',
        name: 'Number of Locations',
        valid: false,
        content: [
          {
            type: 'text',
            name: 'number',
            description: '',
            width: '50',
            placeholder: 'Enter Number',
            inputtype: 'number',
            value: ''
          }
        ]
      },
      {
        title: 'Provide Schedule of Locations',
        name: 'Schedule of Locations',
        valid: false,
        values: [],
        content: [
          {
            type: 'text',
            name: 'address',
            description: '',
            width: '100',
            placeholder: 'Address',
            value: ''
          },
          {
            type: 'text',
            name: 'address2',
            description: '',
            width: '100',
            placeholder: 'Suite, Floor, Etc.',
            value: ''
          },
          {
            type: 'textarea',
            name: 'locationNotes',
            description: 'You can include notes for each location to add additional information like suite or floor number, gross sales per location, square footage per location, etc.',
            width: '100',
            placeholder: 'Location Notes',
            value: ''
          },
          {
            type: 'button',
            width: '100',
            name: 'submitBtn',
            position: 'right',
            title: 'ADD'
          },
          {
            type: 'uploader',
            name: 'addressUploader',
            description: 'If you have a lengthy list to address, please upload for convenience.',
            width: '100',
            placeholder: 'Drag and drop anywhere on the screen. Your attachments will appear in the attachments section below.',
            value: ''
          }
        ]
      }
    ]
  },
  {
    title: 'Operations',
    alias: 'Operations',
    name: 'operations',
    valid: false,
    content: [
      {
        title: 'Retail Operations',
        name: 'Retail Operations',
        valid: false,
        content: [
          {
            type: 'checkbox-group',
            name: 'operationType',
            description: 'Select an operation type:',
            width: '100',
            value: false,
            elements: [
              {
                key: 'retailApparel',
                title: 'Retail Apparel',
                value: false
              },
              {
                key: 'retailJewelry',
                title: 'Retail Jewelry',
                value: false
              },
              {
                key: 'retailFurniture',
                title: 'Retail Furniture',
                value: false
              },
              {
                key: 'retailHomeGoods',
                title: 'Retail Home Goods',
                value: false
              },
              {
                key: 'retailSportingGoods',
                title: 'Retail Sporting Goods',
                value: false
              },
              {
                key: 'retailShoes',
                title: 'Retail Shoes',
                value: false
              },
              {
                key: 'groceryStore',
                title: 'Grocery Store',
                value: false,
                children: [
                  {
                    type: 'checkbox-group',
                    name: 'groceryStore',
                    description: '',
                    width: '80',
                    value: false,
                    elements: [
                      {
                        key: 'gasExposure',
                        title: 'Gas Exposure',
                        value: false,
                        children: [
                          {
                            type: 'text',
                            name: 'gasReceipts',
                            description: '',
                            width: '100',
                            placeholder: 'Gas Receipts',
                            inputtype: 'number',
                            value: ''
                          }
                        ]
                      },
                      {
                        key: 'pharmacyExposure',
                        title: 'Pharmacy Exposure',
                        value: false,
                        children: [
                          {
                            type: 'text',
                            name: 'numberOfPharmacists',
                            description: '',
                            width: '100',
                            placeholder: 'Number of Pharmacists',
                            inputtype: 'number',
                            value: ''
                          },
                          {
                            type: 'text',
                            name: 'numberOfPrescriptions',
                            description: '',
                            width: '100',
                            placeholder: 'Number of Prescriptions',
                            inputtype: 'number',
                            value: ''
                          },
                          {
                            type: 'text',
                            name: 'limitOfLiability',
                            description: '',
                            width: '100',
                            placeholder: 'Limit of Liability',
                            inputtype: 'number',
                            value: ''
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                key: 'other',
                title: 'Other',
                children: [
                  {
                    type: 'textarea',
                    name: 'note',
                    description: '',
                    width: '100',
                    placeholder: 'Please Describe',
                    value: ''
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Applicant Operations',
        name: 'Applicant Operations',
        valid: false,
        content: [
          {
            type: 'radio-group',
            name: 'haveOperations',
            description: 'Does the Applicant have operations in addition to the Retail Exposure?',
            width: '100',
            value: null,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'storeProvide',
            description: 'Does the store provide installation or service of their products?',
            width: '100',
            value: null,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'regularDemonstration',
            description: 'Does store regularly provide demonstrations?',
            width: '100',
            value: null,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'offsiteEvents',
            description: 'Does the applicant conduct or sponsor any off-site events?',
            width: '100',
            value: null,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'checkbox-group',
            name: 'storeLocation',
            description: 'Store(s) are located in:',
            width: '100',
            value: {},
            elements: [
              {
                key: 'shoppingMail',
                title: 'Inside shopping mall',
                value: false
              },
              {
                key: 'stripCenter',
                title: 'Strip center',
                value: false
              },
              {
                key: 'standloneStore',
                title: 'As a stand alone store',
                value: false
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'insureProducts',
            description: 'Does the Applicant have operations in addition to the Retail Exposure?',
            width: '100',
            value: null,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Safety',
    alias: 'Safety',
    name: 'safety',
    valid: false,
    content: [
      {
        title: 'Safety Information',
        name: 'Safety Information',
        valid: false,
        content: [
          {
            type: 'radio-group',
            name: 'safetyRequirements',
            description: 'Do all stores comply with NFPA101 fire safety requirements?',
            width: '100',
            value: null,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'escalators',
            description: 'Do stores with escalators professionally maintain them at least quarterly?',
            width: '100',
            value: null,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'evidenceMaintenance',
            description: 'In the United States, new escalators must abide by ASME A17.1 standards, and old/historic escalators must conform to the safety guidelines of ASME A17.3. Is evidence of maintenance on file?',
            width: '100',
            value: null,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'holdHarmless',
            description: 'Confirm that any contractor that works onsite must evidence at least $1mm liability limits and must sign a hold harmless in favor or insured.',
            width: '100',
            value: null,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'annualMVRs',
            description: 'All drivers (including drivers using their personal vehicles for any company business) must have annual MVR\'s reviewed and no drivers under 21 or over 75; drivers must have less than 3 moving violations annually and no DUI\'s on record.',
            width: '100',
            value: null,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'text',
            name: 'numberOfDrivers',
            description: 'Advise number of drivers that use their own autos for company business.',
            width: '100',
            placeholder: 'Enter Number',
            inputtype: 'number',
            value: ''
          },
          {
            type: 'radio-group',
            name: 'certificate',
            description: 'All product suppliers must evidence a certificate of insurance from an insurer with a US presence demonstrating products liability of at least $5mm. Confirm Certificates obtained.',
            width: '100',
            value: null,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'safetyProgram',
            description: 'All stores must have a written safety program which includes regular floor sweeps multiple times daily, security procedures including dressing room controls, crowd control procedures to name a few. Please confirm.',
            width: '100',
            value: null,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Attachments',
    alias: 'Attachments',
    name: 'attachments',
    valid: false,
    content: [
      {
        title: 'Please Add Required Files:',
        name: 'Add Required Files',
        valid: false,
        content: [
          {
            type: 'list',
            content: [
              'A currently valued general & automobile liability loss runs for the past 5 years. Include detailed claim information for any claim(s) over $250k.',
              'Copies of all underlying policies',
              'A complete list of all named insureds and their operations',
              'A complete schedule of locations'
            ]
          },
          {
            type: 'uploader',
            name: 'requiredFiles',
            description: '',
            width: '100',
            placeholder: 'Drag and drop anywhere on the screen or browse your files.',
            value: ''
          }
        ]
      }
    ]
  }
]
