import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import {
  BsHouse,
  BsFileEarmarkText,
  BsCreditCard,
  BsPeople,
  BsBell,
  BsCheckCircleFill,
  BsArrowRight,
} from "react-icons/bs";

function QueOfrecemos() {

  const [activeFeature, setActiveFeature] = useState("propiedades");

  const features = {
    propiedades: {
      icon: <BsHouse />,
      title: "Gestión de propiedades",
      description:
        "Registrá, organizá y consultá toda la información de tus propiedades desde un solo lugar.",
      previewTitle: "Departamento Centro",
      status: "Alquilado",
      statusVariant: "success",
      price: "$350.000",
      date: "30 de septiembre",
      dateLabel: "Próximo vencimiento",
      color: "#3159C9",
      lightColor: "#EEF4FF",
    },

    contratos: {
      icon: <BsFileEarmarkText />,
      title: "Contratos digitales",
      description:
        "Centralizá los contratos de tus propiedades y tené siempre a mano sus fechas importantes.",
      previewTitle: "Contrato Departamento Centro",
      status: "Activo",
      statusVariant: "success",
      price: "Contrato vigente",
      date: "30 de septiembre",
      dateLabel: "Fecha de vencimiento",
      color: "#7048C8",
      lightColor: "#F3EEFF",
    },

    pagos: {
      icon: <BsCreditCard />,
      title: "Control de pagos",
      description:
        "Registrá los pagos de alquiler y consultá fácilmente el estado de cada operación.",
      previewTitle: "Pago de alquiler",
      status: "Pagado",
      statusVariant: "success",
      price: "$350.000",
      date: "Septiembre 2026",
      dateLabel: "Período",
      color: "#E27A2F",
      lightColor: "#FFF3E9",
    },

    inquilinos: {
      icon: <BsPeople />,
      title: "Gestión de inquilinos",
      description:
        "Mantené organizada la información de tus inquilinos y vinculala con cada propiedad.",
      previewTitle: "Información del inquilino",
      status: "Activo",
      statusVariant: "success",
      price: "Departamento Centro",
      date: "Contrato activo",
      dateLabel: "Estado",
      color: "#2A9D72",
      lightColor: "#EAF8F2",
    },

    alertas: {
      icon: <BsBell />,
      title: "Recordatorios y alertas",
      description:
        "Recibí recordatorios para estar al día con vencimientos, pagos y renovaciones.",
      previewTitle: "Próximo vencimiento",
      status: "Pendiente",
      statusVariant: "warning",
      price: "Contrato de alquiler",
      date: "30 de septiembre",
      dateLabel: "Vencimiento",
      color: "#D97706",
      lightColor: "#FFF7E6",
    },
  };

  const selectedFeature = features[activeFeature];

  return (
    <main>

      <section className="py-5">
        <Container className="py-lg-5">

          <Row className="justify-content-center text-center">
            <Col lg={8}>

              <Badge
                bg="light"
                text="primary"
                className="px-3 py-2 rounded-pill mb-3"
              >
                TODO EN UN SOLO LUGAR
              </Badge>

              <h1 className="display-5 fw-bold text-dark mb-3">
                Todo lo que necesitás para gestionar tus propiedades
              </h1>

              <p className="lead text-secondary mb-0">
                Alquidar reúne en un solo lugar las herramientas que
                necesitás para organizar propiedades, contratos, pagos
                y vencimientos de manera simple y segura.
              </p>

            </Col>
          </Row>

        </Container>
      </section>


      <section className="pb-5">
        <Container>

          <Row className="g-4 align-items-stretch">

            <Col lg={4}>

              <Card className="border-0 shadow-sm rounded-4 h-100 p-3">

                <Card.Body>

                  <p className="text-secondary small fw-semibold mb-3">
                    CONOCÉ NUESTRAS FUNCIONES
                  </p>

                  <div className="d-flex flex-column gap-2">

                    <Button
                      variant="light"
                      className={`text-start border-0 rounded-3 p-3 ${
                        activeFeature === "propiedades"
                          ? "bg-light"
                          : ""
                      }`}
                      onClick={() => setActiveFeature("propiedades")}
                    >
                      <div className="d-flex align-items-center gap-3">

                        <span
                          className="fs-5"
                          style={{
                            color:
                              activeFeature === "propiedades"
                                ? features.propiedades.color
                                : "#6c757d",
                          }}
                        >
                          <BsHouse />
                        </span>

                        <div>
                          <div className="fw-semibold text-dark">
                            Propiedades
                          </div>

                          <small className="text-secondary">
                            Organizá tus inmuebles
                          </small>
                        </div>

                      </div>
                    </Button>

                    <Button
                      variant="light"
                      className={`text-start border-0 rounded-3 p-3 ${
                        activeFeature === "contratos"
                          ? "bg-light"
                          : ""
                      }`}
                      onClick={() => setActiveFeature("contratos")}
                    >
                      <div className="d-flex align-items-center gap-3">

                        <span
                          className="fs-5"
                          style={{
                            color:
                              activeFeature === "contratos"
                                ? features.contratos.color
                                : "#6c757d",
                          }}
                        >
                          <BsFileEarmarkText />
                        </span>

                        <div>
                          <div className="fw-semibold text-dark">
                            Contratos
                          </div>

                          <small className="text-secondary">
                            Centralizá tus contratos
                          </small>
                        </div>

                      </div>
                    </Button>

                    <Button
                      variant="light"
                      className={`text-start border-0 rounded-3 p-3 ${
                        activeFeature === "pagos"
                          ? "bg-light"
                          : ""
                      }`}
                      onClick={() => setActiveFeature("pagos")}
                    >
                      <div className="d-flex align-items-center gap-3">

                        <span
                          className="fs-5"
                          style={{
                            color:
                              activeFeature === "pagos"
                                ? features.pagos.color
                                : "#6c757d",
                          }}
                        >
                          <BsCreditCard />
                        </span>

                        <div>
                          <div className="fw-semibold text-dark">
                            Pagos
                          </div>

                          <small className="text-secondary">
                            Controlá tus operaciones
                          </small>
                        </div>

                      </div>
                    </Button>

                    <Button
                      variant="light"
                      className={`text-start border-0 rounded-3 p-3 ${
                        activeFeature === "inquilinos"
                          ? "bg-light"
                          : ""
                      }`}
                      onClick={() => setActiveFeature("inquilinos")}
                    >
                      <div className="d-flex align-items-center gap-3">

                        <span
                          className="fs-5"
                          style={{
                            color:
                              activeFeature === "inquilinos"
                                ? features.inquilinos.color
                                : "#6c757d",
                          }}
                        >
                          <BsPeople />
                        </span>

                        <div>
                          <div className="fw-semibold text-dark">
                            Inquilinos
                          </div>

                          <small className="text-secondary">
                            Información siempre organizada
                          </small>
                        </div>

                      </div>
                    </Button>

                    <Button
                      variant="light"
                      className={`text-start border-0 rounded-3 p-3 ${
                        activeFeature === "alertas"
                          ? "bg-light"
                          : ""
                      }`}
                      onClick={() => setActiveFeature("alertas")}
                    >
                      <div className="d-flex align-items-center gap-3">

                        <span
                          className="fs-5"
                          style={{
                            color:
                              activeFeature === "alertas"
                                ? features.alertas.color
                                : "#6c757d",
                          }}
                        >
                          <BsBell />
                        </span>

                        <div>
                          <div className="fw-semibold text-dark">
                            Alertas
                          </div>

                          <small className="text-secondary">
                            No olvides ninguna fecha
                          </small>
                        </div>

                      </div>
                    </Button>

                  </div>

                </Card.Body>

              </Card>

            </Col>


            <Col lg={8}>

              <Card
                className="border-0 shadow-sm rounded-4 h-100 overflow-hidden"
                style={{
                  backgroundColor: selectedFeature.lightColor,
                }}
              >

                <Card.Body className="p-4 p-lg-5">


                  <div className="d-flex justify-content-between align-items-start mb-4">

                    <div>

                      <small className="text-secondary">
                        VISTA PREVIA
                      </small>

                      <h3 className="fw-bold text-dark mt-1 mb-0">
                        {selectedFeature.title}
                      </h3>

                    </div>

                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 bg-white shadow-sm"
                      style={{
                        width: "48px",
                        height: "48px",
                        color: selectedFeature.color,
                      }}
                    >
                      <span className="fs-5">
                        {selectedFeature.icon}
                      </span>
                    </div>
                  </div>

                  <p className="text-secondary mb-4">
                    {selectedFeature.description}
                  </p>


                  <Card className="border-0 rounded-4 shadow-sm bg-white">

                    <Card.Body className="p-4">

                      <div className="d-flex justify-content-between align-items-center mb-4">

                        <div>
                          <small className="text-secondary">
                            {selectedFeature.dateLabel}
                          </small>

                          <h4 className="fw-bold text-dark mb-0">
                            {selectedFeature.date}
                          </h4>
                        </div>

                        <Badge
                          bg={selectedFeature.statusVariant}
                          className="rounded-pill px-3 py-2"
                        >
                          {selectedFeature.status}
                        </Badge>

                      </div>


                      <div className="border-top pt-4">

                        <small className="text-secondary">
                          {activeFeature === "pagos"
                            ? "Monto"
                            : "Información"}
                        </small>

                        <div className="d-flex justify-content-between align-items-center">

                          <span className="fw-semibold text-dark">
                            {selectedFeature.previewTitle}
                          </span>

                          <span
                            className="fw-bold"
                            style={{
                              color: selectedFeature.color,
                            }}
                          >
                            {selectedFeature.price}
                          </span>

                        </div>

                      </div>

                    </Card.Body>

                  </Card>

                  <div className="mt-4">

                    <div className="d-flex align-items-center gap-2 mb-2">
                      <BsCheckCircleFill
                        style={{ color: selectedFeature.color }}
                      />
                      <span className="text-secondary">
                        Información centralizada
                      </span>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <BsCheckCircleFill
                        style={{ color: selectedFeature.color }}
                      />
                      <span className="text-secondary">
                        Gestión simple y organizada
                      </span>
                    </div>

                  </div>

                </Card.Body>

              </Card>

            </Col>

          </Row>

        </Container>
      </section>


      <section className="py-5 bg-light">
        <Container className="py-lg-4">

          <Row className="justify-content-center text-center">
            <Col lg={8}>

              <p className="text-primary fw-semibold small mb-2">
                TODO CONECTADO
              </p>

              <h2 className="fw-bold text-dark mb-3">
                Una gestión más simple, de principio a fin
              </h2>

              <p className="text-secondary mb-5">
                Alquidar conecta cada parte de la gestión para que
                tengas toda la información que necesitás en un solo lugar.
              </p>

            </Col>
          </Row>


          <Row className="justify-content-center align-items-center g-3">

            <Col xs={12} sm="auto">
              <Card className="border-0 shadow-sm rounded-4">
                <Card.Body className="px-4 py-3 text-center">
                  <BsHouse className="text-primary me-2" />
                  <span className="fw-semibold">
                    Propiedades
                  </span>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm="auto" className="text-center">
              <BsArrowRight className="text-secondary" />
            </Col>

            <Col xs={12} sm="auto">
              <Card className="border-0 shadow-sm rounded-4">
                <Card.Body className="px-4 py-3 text-center">
                  <BsFileEarmarkText className="text-primary me-2" />
                  <span className="fw-semibold">
                    Contratos
                  </span>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm="auto" className="text-center">
              <BsArrowRight className="text-secondary" />
            </Col>

            <Col xs={12} sm="auto">
              <Card className="border-0 shadow-sm rounded-4">
                <Card.Body className="px-4 py-3 text-center">
                  <BsCreditCard className="text-primary me-2" />
                  <span className="fw-semibold">
                    Pagos
                  </span>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm="auto" className="text-center">
              <BsArrowRight className="text-secondary" />
            </Col>

            <Col xs={12} sm="auto">
              <Card className="border-0 shadow-sm rounded-4">
                <Card.Body className="px-4 py-3 text-center">
                  <BsBell className="text-primary me-2" />
                  <span className="fw-semibold">
                    Alertas
                  </span>
                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>
      </section>

      <section className="py-5">
        <Container className="py-lg-5">

          <Card
            className="border-0 rounded-4 overflow-hidden"
            style={{
              backgroundColor: "#14213D",
            }}
          >

            <Card.Body className="p-4 p-md-5 text-center">

              <h2 className="text-white fw-bold mb-3">
                Simplificá hoy la gestión de tus propiedades
              </h2>

              <p className="text-white-50 mb-4">
                Organizá tus propiedades, contratos y pagos
                desde un solo lugar.
              </p>

              <Button
                variant="light"
                className="rounded-3 px-4 py-2 fw-semibold"
              >
                Comenzar ahora
                <BsArrowRight className="ms-2" />
              </Button>

            </Card.Body>

          </Card>

        </Container>
      </section>

    </main>
  );
}

export default QueOfrecemos;